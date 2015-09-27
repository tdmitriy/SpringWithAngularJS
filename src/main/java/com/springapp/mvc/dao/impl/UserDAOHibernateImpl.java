package com.springapp.mvc.dao.impl;

import com.springapp.mvc.dao.IUserDAO;
import com.springapp.mvc.model.User;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.beans.Expression;
import java.util.List;

@Repository
public class UserDAOHibernateImpl implements IUserDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void saveOrUpdate(User user) {
        if (user.getId() == null) {
            getSession().save(user);
        } else {
            getSession().update(user);
        }
    }

    @Override
    public void delete(User user) {
        getSession().delete(user);
    }

    @SuppressWarnings("JpaQlInspection")
    @Override
    public void deleteAll() {
        getSession().createQuery("delete from User").executeUpdate();
    }

    @Override
    public User getById(Integer id) {
        return getSession().get(User.class, id);
    }

    @SuppressWarnings({"unchecked", "JpaQlInspection"})
    @Override
    public List<User> list() {
        return getSession().createQuery("from User").list();
    }

    @SuppressWarnings({"unchecked", "JpaQlInspection", "SqlDialectInspection"})
    @Override
    public List<User> search(String searchQuery) {
        Query query = getSession()
                .createSQLQuery("CALL GetUserByCriteria(:criteria)")
                .addEntity(User.class)
                .setParameter("criteria", searchQuery);

        return query.list();
    }

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }
}
