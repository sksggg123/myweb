package com.sksggg123.myweb.web;

import com.sksggg123.myweb.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @Autowired MainService mainService;

    @RequestMapping(value = "/main")
    public String main() {
        return "main" + mainService.main();
    }
}
