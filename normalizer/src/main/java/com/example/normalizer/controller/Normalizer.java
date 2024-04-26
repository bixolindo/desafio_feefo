package com.example.normalizer.controller;

import java.util.Arrays;
import java.util.logging.Logger;

import com.example.normalizer.constants.NormalizedJobTitles;
import com.example.normalizer.exceptions.NormalizerException;

public class Normalizer {

    private static final Logger logger = Logger.getLogger(Normalizer.class.getName());

    public String normalize(String jobTitle) throws Exception {
        if (jobTitle == null || jobTitle.trim().isEmpty()) {
            throw new NormalizerException("Job Title must not be empty");
        }
        String normalizedInput = jobTitle.toLowerCase().trim();
        // Calculate Jaccard Similarity score for each normalized job title
        String bestMatch = calculateSimilarityForEachNormalizedJobTitle(normalizedInput);
        logger.fine("Best match found was " + bestMatch);
        System.out.println("Best match found was " + bestMatch);

        return bestMatch;
    }

    private String calculateSimilarityForEachNormalizedJobTitle(String normalizedInput) {
        double qualityScore = 0;
        String bestMatch = "";
        for (String possibleNormalizedTitle : NormalizedJobTitles.NORMALIZED_JOB_TITLES_LIST) {
            double score = jaccardSimilarity(normalizedInput, possibleNormalizedTitle.toLowerCase().trim());

            if (0.0 <= score && score <= 1.0 && score > qualityScore) {
                bestMatch = possibleNormalizedTitle;
                qualityScore = score;

                if (qualityScore == 1.0) {
                    break;
                }
            }
        }
        return bestMatch;
    }

    private double jaccardSimilarity(String normalizedInput, String possibleNormalizedTitle) {
        int maxLength = Math.max(normalizedInput.length(), possibleNormalizedTitle.length());
        int distance = levenshteinDistance(normalizedInput, possibleNormalizedTitle);
        return 1.0 - ((double) distance / maxLength);
    }

    private int levenshteinDistance(String normalizedInput, String possibleNormalizedTitle) {
        int rows = normalizedInput.length();
        int columns = possibleNormalizedTitle.length();

        // Create a single-row array to store the previous row of the matrix
        int[] previousRow = new int[columns + 1];
        for (int j = 0; j <= columns; j++) {
            previousRow[j] = j;
        }

        for (int i = 1; i <= rows; i++) {
            // Use two variables to store the previous diagonal and top elements
            int previousDiagonal = previousRow[0];
            previousRow[0] = i;

            for (int j = 1; j <= columns; j++) {
                int cost = costOfSubstitution(normalizedInput.charAt(i - 1), possibleNormalizedTitle.charAt(j - 1));
                int insertCost = previousRow[j] + 1;
                int deleteCost = previousRow[j - 1] + 1;
                int replaceCost = previousDiagonal + cost;

                previousDiagonal = previousRow[j];
                previousRow[j] = min(insertCost, deleteCost, replaceCost);
            }
        }
        return previousRow[columns];
    }

    private int costOfSubstitution(char a, char b) {
        return a == b ? 0 : 1;
    }

    private int min(int... numbers) {
        return Arrays.stream(numbers).min().orElse(Integer.MAX_VALUE);
    }

}
