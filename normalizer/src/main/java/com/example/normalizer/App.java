package com.example.normalizer;

import com.example.normalizer.controller.Normalizer;

public class App {
    public static void main(String[] args) throws Exception {
        String jt = "Java engineer";
        Normalizer n = new Normalizer();
        String normalisedTitle = n.normalize(jt);
        // output normalisedTitle
        jt = "C# engineer";
        normalisedTitle = n.normalize(jt);
        // output normalisedTitle
        jt = "Chief Accountant";
        normalisedTitle = n.normalize(jt);
        // output normalisedTitle
    }
}
