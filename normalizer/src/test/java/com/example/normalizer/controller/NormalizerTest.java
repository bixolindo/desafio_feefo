package com.example.normalizer.controller;

import org.junit.Test;
import static org.junit.Assert.*;

import org.junit.Before;

public class NormalizerTest {

    Normalizer normalizer;

    @Before
    public void setUp() {
        normalizer = new Normalizer();
    }

    @Test
    public void testNormalise_NullInput() throws Exception {
        String result = normalizer.normalize(null);
        assertEquals("Job Title must not be empty", result);
    }

    @Test
    public void testNormalise_EmptyInput() throws Exception {
        String result = normalizer.normalize("");
        assertEquals("Job Title must not be empty", result);
    }

    @Test
    public void testNormalise_ExactMatch() throws Exception {
        String jobTitle = "Accountant";
        String result = normalizer.normalize(jobTitle);
        assertEquals("Accountant", result); // Expecting "Accountant" as it's an exact match
    }

    @Test
    public void testNormalise_SimilarMatch() throws Exception {
        String jobTitle = "Java engineer";
        String result = normalizer.normalize(jobTitle);
        assertEquals("Software engineer", result); // Expecting "Software engineer" as the best similar match
    }

    @Test
    public void testNormalise_HighestQuality() throws Exception {
        String jobTitle = "C# engineer"; // Higher quality match
        String result = normalizer.normalize(jobTitle);
        assertEquals("Software engineer", result);
    }

}
