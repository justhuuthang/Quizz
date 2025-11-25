package com.hucework.quizzonline.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;
@Getter
@Setter
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)

    private Long id;
    @NotBlank
    private String question;
    @NotBlank
    private String subject;
    @NotBlank
    private String questionType;

    @NotBlank
    @ElementCollection
    private List<String> choices;
    @NotBlank
    @ElementCollection
    private List<String> correctAnswers;
}
