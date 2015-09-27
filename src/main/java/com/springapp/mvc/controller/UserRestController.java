package com.springapp.mvc.controller;

import com.springapp.mvc.exception.BadRequestException;
import com.springapp.mvc.exception.DatabaseException;
import com.springapp.mvc.exception.JsonResponseErrorObject;
import com.springapp.mvc.model.User;
import com.springapp.mvc.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/users/service")
public class UserRestController {
    private static final Logger log = LoggerFactory.getLogger(UserRestController.class);

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/getList.json",
            produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<User> getUserList() {
        return userService.list();
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(@Valid @RequestBody User user, BindingResult errors) {
        if (errors.hasErrors()) {
            for (ObjectError error : errors.getAllErrors())
                log.error("BindingResult error: {}", error.getDefaultMessage());
            throw new BadRequestException(errors.getAllErrors());
        } else {
            userService.saveOrUpdate(user);
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/search/{criteria}",
            produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public List<User> getSearchResult(@PathVariable("criteria") String criteria) {
        if (criteria != null) {
            return userService.search(criteria);
        } else {
            throw new BadRequestException("Bad criteria for searching.");
        }
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable("id") Integer id) {
        if (id != null) {
            User user = userService.getById(id);
            if (user != null) {
                userService.delete(user);
            } else {
                throw new BadRequestException("Deletion error: current user not found.");
            }

        } else {
            throw new BadRequestException("Deletion error: current user not found.");
        }

    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/deleteAll", method = RequestMethod.DELETE)
    public void deleteAll() {
        userService.deleteAll();
    }

    @ExceptionHandler(DatabaseException.class)
    @ResponseBody
    public ResponseEntity<JsonResponseErrorObject> databaseExceptionHandler(DatabaseException ex) {
        log.error("----------IN DB EXCEPTION----------");
        log.error("DB EXCEPTION: " + ex.getMessage());
        JsonResponseErrorObject errorObject = new JsonResponseErrorObject();
        String errMsg = "We have a some problems with database, please try again later.";
        errorObject.setErrors(Collections.singletonList(errMsg));
        return new ResponseEntity<>(errorObject, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
