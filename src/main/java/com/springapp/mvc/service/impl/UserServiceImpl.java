package com.springapp.mvc.service.impl;

import com.springapp.mvc.dao.IUserDAO;
import com.springapp.mvc.exception.DatabaseException;
import com.springapp.mvc.model.User;
import com.springapp.mvc.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class UserServiceImpl implements IUserService {
    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

    private IUserDAO userDAO;

    @Autowired
    public void setUserDAO(IUserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    @Transactional(rollbackFor = DatabaseException.class)
    public void saveOrUpdate(User user) {
        try {
            userDAO.saveOrUpdate(user);
        } catch (Exception ex) {
            log.error("saveOrUpdate() error: \n" + ex.getMessage());
            throw new DatabaseException(ex);
        }
    }

    @Override
    @Transactional(rollbackFor = DatabaseException.class)
    public void delete(User user) {
        try {
            userDAO.delete(user);
        } catch (Exception ex) {
            log.error("delete() error: \n" + ex.getMessage());
            throw new DatabaseException(ex);
        }
    }

    @Override
    @Transactional(rollbackFor = DatabaseException.class)
    public void deleteAll() {
        try {
            userDAO.deleteAll();
        } catch (Exception ex) {
            log.error("deleteAll() error: \n" + ex.getMessage());
            throw new DatabaseException(ex);
        }
    }

    @Override
    @Transactional(rollbackFor = DatabaseException.class)
    public User getById(Integer id) {
        try {
            return userDAO.getById(id);
        } catch (Exception ex) {
            log.error("getById() error: \n" + ex.getMessage());
            throw new DatabaseException(ex);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = DatabaseException.class)
    public List<User> list() {
        try {
            return userDAO.list();
        } catch (Exception ex) {
            log.error("list() error: \n" + ex.getMessage());
            throw new DatabaseException(ex);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = DatabaseException.class)
    public List<User> search(String searchQuery) {
        try {
            return userDAO.search(searchQuery);
        } catch (Exception ex) {
            log.error("search() error: \n" + ex.getMessage());
            throw new DatabaseException(ex);
        }
    }
}
