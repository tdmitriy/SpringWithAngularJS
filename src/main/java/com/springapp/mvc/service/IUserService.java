package com.springapp.mvc.service;

import com.springapp.mvc.model.User;

import java.util.List;

public interface IUserService {
    void saveOrUpdate(User user);

    void delete(User user);

    void deleteAll();

    User getById(Integer id);

    List<User> list();

    List<User> search(String searchQuery);
}
