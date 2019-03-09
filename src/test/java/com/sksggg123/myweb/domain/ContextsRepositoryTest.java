package com.sksggg123.myweb.domain;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ContextsRepositoryTest {

    @Autowired ContentsRepository contentsRepository;

    @After // Test 이후 코드에 영향을 끼치지 않기 위해 테스트 데이터를 지우기 위한 절차
    public void cleanup() {

        contentsRepository.deleteAll();
    }

    @Test
    public void 컨텐츠_링크_넣기() {
        // given
        contentsRepository.save(Contents.builder()
                .link("https://github.com/sksggg123")
                .description("sksggg123깃허브")
                .category(1L)
                .build());
        // when
        List<Contents> list = contentsRepository.findAll();

        // then
        Contents contents = list.get(0);
        assertThat(contents.getLink(), is("https://github.com/sksggg123"));
        assertThat(contents.getDescription(), is("sksggg123깃허브"));
        assertThat(contents.getCategory(), is(1L));

    }
}
