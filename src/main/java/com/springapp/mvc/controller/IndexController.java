package com.springapp.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
    private static final String PAGE_SITE_TEMPLATE = "siteTemplate";
    private static final String PAGE_INDEX_VIEW = "view/indexView";
    private static final String PAGE_404_VIEW = "view/404_View";

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getIndexTemplate() {
        return PAGE_SITE_TEMPLATE;
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String getIndexView() {
        return PAGE_INDEX_VIEW;
    }

    @RequestMapping(value = "/404", method = RequestMethod.GET)
    public String get404View() {
        return PAGE_404_VIEW;
    }
}
