package com.sksggg123.myweb.dto;

import com.sksggg123.myweb.domain.Contents;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class
ContentsSaveRequestDto {

    private String link;
    private String description;
    private Long category;

    public Contents toEntry() {
        return Contents.builder()
                .link(this.link)
                .description(this.description)
                .category(this.category)
                .build();
    }
}
