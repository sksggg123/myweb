package com.sksggg123.myweb.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Contents {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 4000, nullable = false)
    private String link;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String description;

    @Column(nullable = false)
    private Long category;

    @Builder
    private Contents(String link, String description, Long category) {
        this.link = link;
        this.description = description;
        this.category = category;
    }

}
