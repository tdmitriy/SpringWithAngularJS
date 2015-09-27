package com.springapp.mvc.exception;

import java.util.List;

public class JsonResponseErrorObject {
    private List<String> errors;

    public JsonResponseErrorObject() {
    }


    public JsonResponseErrorObject(List<String> errors) {
        this.errors = errors;
    }


    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}
