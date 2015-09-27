package com.springapp.mvc.model;

import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "first_name")
    @NotNull(message = "First name is required.")
    @NotEmpty(message = "First name is empty or contains a white space(s).")
    @Size(min = 2, max = 30, message = "First name must be between {min} - {max} values.")
    @Pattern(regexp = "[A-Za-zА-Яа-я]*", message = "First name must contains only letters.")
    private String firstName;

    @Column(name = "last_name")
    @NotNull(message = "Last name is required.")
    @NotEmpty(message = "Last name is empty or contains a white space(s).")
    @Size(min = 2, max = 30, message = "Last name must be between {min} - {max} values.")
    @Pattern(regexp = "[A-Za-zА-Яа-я]*", message = "Last name must contains only letters.")
    private String lastName;

    @Column(name = "salary")
    @Min(value = 1, message = "Salary min value is {value}.")
    @Max(value = Integer.MAX_VALUE - 1, message = "Salary max value is {value}.")
    private Integer salary;


    public User() {
    }

    public User(String firstName, String lastName, Integer salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    public Integer getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return String.format("User[id=%s, firstName=%s, lastName=%s, salary=%s]", id, firstName, lastName, salary);
    }
}