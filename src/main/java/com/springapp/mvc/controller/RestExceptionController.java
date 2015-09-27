package com.springapp.mvc.controller;

import com.springapp.mvc.exception.BadRequestException;
import com.springapp.mvc.exception.JsonResponseErrorObject;
import org.apache.commons.dbcp.BasicDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@ControllerAdvice
public class RestExceptionController {
    private static final Logger log = LoggerFactory.getLogger(RestExceptionController.class);

    @ExceptionHandler(Exception.class)
    @ResponseBody
    protected ResponseEntity<JsonResponseErrorObject> handleError(HttpServletRequest req, Exception exception) {
        log.error("Request: " + req.getRequestURL() + "\nraised " + exception);
        log.error("exception message=" + exception.getMessage());

        JsonResponseErrorObject error = new JsonResponseErrorObject();
        String errMsg = "We have a some problems on server, please try again later.";
        error.setErrors(Collections.singletonList(errMsg));
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(BadRequestException.class)
    @ResponseBody
    protected ResponseEntity<JsonResponseErrorObject> badRequestHandler(
            HttpServletRequest req, BadRequestException exception) {
        log.error("Request: " + req.getRequestURL() + "\nraised " + exception);
        log.error("exception message=" + exception.getMessage());

        JsonResponseErrorObject error = new JsonResponseErrorObject();
        if (exception.getMessage() != null) {
            String errMsg = exception.getMessage();
            error.setErrors(Collections.singletonList(errMsg));
        }
        List<ObjectError> errorList = exception.getErrors();
        if (errorList != null) {
            List<String> responseErrors = new ArrayList<>();
            for (ObjectError objectError : errorList) {
                responseErrors.add(objectError.getDefaultMessage());

            }
            error.setErrors(responseErrors);
        }
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
