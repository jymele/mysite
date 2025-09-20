"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { skillsData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);

  const showAllSkills = () => {
    const allSkills: string[] = [];
    Object.values(skillsData).forEach((skills) => {
      allSkills.push(...skills);
    });
    setFilteredSkills(allSkills);
    setSelectedCategory(null);
  };

  const filterSkillsByCategory = (category: string) => {
    setFilteredSkills(skillsData[category] || []);
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Show all skills by default
    showAllSkills();
  }, []);

  const chartData = {
    labels: Object.keys(skillsData),
    datasets: [
      {
        label: "Skill Category Focus",
        data: [90, 95, 80, 85],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(22, 163, 74, 0.7)",
          "rgba(249, 115, 22, 0.7)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(22, 163, 74, 1)",
          "rgba(249, 115, 22, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function () {
            return " Click to filter by this category";
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 14,
            weight: "normal" as const,
          },
          color: "#3f3f46",
        },
      },
    },
    onClick: (event: any, elements: any[]) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index;
        const category = Object.keys(skillsData)[clickedIndex];
        filterSkillsByCategory(category);
      }
    },
  };

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
            Interactive Skills Showcase
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Click on a category in the chart to filter the skills list below.
          </p>
        </motion.div>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="chart-container">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <div className="mt-8">
                <div className="flex justify-center mb-4">
                  <Button
                    onClick={showAllSkills}
                    className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Show All Skills
                  </Button>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center"
                  layout
                >
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      layout
                    >
                      <Badge
                        variant="secondary"
                        className="p-3 text-sm font-medium w-full justify-center"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
