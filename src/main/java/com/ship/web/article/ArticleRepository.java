package com.ship.web.article;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ship.web.person.Person;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Long>{

}
