package com.sksggg123.myweb.web;

import com.sksggg123.myweb.domain.ContentsRepository;
import com.sksggg123.myweb.dto.ContentsSaveRequestDto;
import com.sksggg123.myweb.service.MainService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor // 생성자 주입방법
public class MainController {

    MainService mainService;

    ContentsRepository contentsRepository;

    @RequestMapping(value = "/main")
    public String main() {
        return "main" + mainService.main();
    }

    @RequestMapping(value = "/postContents")
    public void saveContents(@RequestBody ContentsSaveRequestDto dto) {
        contentsRepository.save(dto.toEntry());
    }
}
