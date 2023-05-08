# SRMconnect
SRMconnect is a web app for managing student relationships, attendance, and progress reports with secure login for admins, tutors, and social workers.


detailed features broken down by the main features:
# 1. User Management
## 1.1 User Authentication
  * User registration
  * User login/logout : consider passwordless login too.
  * Password reset
  * JWT token generation on successful login
  * JWT token verification on API calls
  * Error handling for authentication errors
## 1.2 User Authorization
  * Authorization middleware for each user role
  * Role-based access control (RBAC) implementation
  * Admin panel for managing user accounts and roles
  * Error handling for authorization errors
## 1.3 User Dashboard
  * Separate dashboard for each user role
  * Display relevant information for each user role on the dashboard
  * Navigation menu to access other sections of the app
  * Error handling for dashboard loading errors
## 1.4 User Account Management
  * User profile page with editable user details
  * Update user details API endpoint
  * Password change form and API endpoint
  * Delete user account API endpoint
  * Error handling for account management errors
# 2.Attendance and Progress Recording
## 2.1 Attendance Recording
  * Attendance form for each lesson
  * Validation for attendance form fields
  * API endpoint for submitting attendance data
  * Error handling for attendance submission errors
## 2.2 Progress Recording
  * Progress report form for each student
  * Validation for progress report form fields
  * API endpoint for submitting progress report data
  * Error handling for progress report submission errors
## 2.3 Attendance and Progress Dashboard
  * Separate dashboard for tutors to view attendance and progress reports
  * Display attendance and progress data for each student
  * Pagination and search functionality for attendance and progress report list
  * Export attendance and progress data as CSV or PDF
  * Error handling for dashboard loading errors
# 3.Student Management
## 3.1 Student Registration
  * Student registration form for admin
  * Validation for student registration form fields
  * API endpoint for adding new students
  * Error handling for student registration errors
## 3.2 Student Details
  * Student details page with editable details
  * Update student details API endpoint
  * Display student attendance and progress data on the student details page
  * Error handling for student details loading and submission errors
## 3.3 Enrollment Status Management
  * Enrollment status change form for admin
  * Validation for enrollment status change form fields
  * API endpoint for changing enrollment status
  * Error handling for enrollment status change errors
## 3.4 Student List Dashboard
  * Dashboard for admin to view information about all students
  * Display list of all students with relevant information
  * Search and filter functionality for student list
  * Delete student confirmation modal
  * Error handling for dashboard loading and student deletion errors
# 4. Social Worker Dashboard
## 4.1 Dashboard for Social Workers
  * Dashboard for social workers to view attendance and progress reports
  * Display attendance and progress data for each student
  * Display test results on student profile page
  * Error handling for dashboard loading errors
## 4.2 Test Result Recording
  * Test result form for tutors
  * Validation for test result form fields
  * API endpoint for submitting test results
  * Error handling for test result submission errors
## 4.3 Test Result Display
  * Display test results on student profile page
  * Display test results on social worker dashboard
  * Export test results as CSV or PDF
  * Error handling for test result loading errors
# 5. Webhosting Details
## 5.1 Hosting Information
  * Information on web hosting options and requirements
  * Server setup guide for the chosen hosting provider
  * Environment variables management for different hosting environments
  * Error handling for hosting information loading errors
## 5.2 Deployment
  * Deployment scripts for the chosen hosting provider
  * SSL certificate installation and configuration
  * Backup and restore procedures for the database
  * Error handling for deployment errors
# 6. Security
## 6.1 Password Security
  * Password encryption and salting
  * Password reset functionality with email verification
