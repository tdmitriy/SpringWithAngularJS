package com.springapp.mvc.controller;

import com.springapp.mvc.exception.DatabaseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserViewController {
    private static final Logger log = LoggerFactory.getLogger(UserViewController.class);

    private static final String PAGE_USERS_SHOW = "view/usersView";
    private static final String PAGE_USERS_MANAGEMENT = "view/usersManagementView";
    private static final String PAGE_CONFIRM_MODAL_VIEW = "view/modalView";


    @RequestMapping(value = "/users/view/show", method = RequestMethod.GET)
    public String showUsersPage() {
        return PAGE_USERS_SHOW;
    }

    @RequestMapping(value = "/users/view/management", method = RequestMethod.GET)
    public String showUsersManagementPage() {
        return PAGE_USERS_MANAGEMENT;
    }

    @RequestMapping(value = "/users/view/modal", method = RequestMethod.GET)
    public String showConfirmationModalPage() {
        return PAGE_CONFIRM_MODAL_VIEW;
    }
}
