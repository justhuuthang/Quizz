package com.hucework.quizzonline.repository;

import com.hucework.quizzonline.model.Question;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.net.ContentHandler;
import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {

    @Query("SELECT distinct q.subject FROM Question q")

    List<String> findDistinctSubject();

    Page<Question> findBySubject(String subject, Pageable pageable);
}
