package com.sksggg123.myweb.web;

import net.minidev.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController("/login")
public class LoginController {

    @GetMapping("/github")
    public void githubCallback(HttpServletResponse response) throws IOException {

        JSONObject json = new JSONObject();
        json.put("clientId", "ccb8598d9316780c7b0f");
        json.put("clientSecret", "58e269b2d9a5a6ab561d6631877c782a8b33d91e");
        json.put("clientId", "ccb8598d9316780c7b0f");
        json.put("clientId", "ccb8598d9316780c7b0f");
        response.sendRedirect("http://localhost:8080/");
    }

    @GetMapping("/github/token")
    public JSONObject testCallBack(HttpServletResponse response) {
        JSONObject json = new JSONObject();

        return json;
    }
}
