package com.springapp.mvc.exception;

import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.List;

public class BadRequestException extends RuntimeException {
    private List<ObjectError> errors;

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public BadRequestException(Throwable cause) {
        super(cause);
    }

    public BadRequestException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public BadRequestException(List<ObjectError> errors) {
        this.errors = errors;
    }

    public BadRequestException() {
    }

    public List<ObjectError> getErrors() {
        return errors == null ? null : errors;
    }
}
