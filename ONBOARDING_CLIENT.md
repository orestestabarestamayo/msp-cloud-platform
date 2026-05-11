# Client Onboarding - MSP Cloud Infrastructure Platform

This document describes the step-by-step process to onboard a new client into the infrastructure platform.

## Objective

To provision a fully functional cloud environment for a new client, including frontend, backend, and database, using a standardized infrastructure template.

## Client Requirements

Before onboarding:

- Application source code (frontend + backend)
- Environment variables
- Database schema (if applicable)
- Domain name (optional)

## Environment Setup

### Step 1 - Repository
- Clone this template repository
- Rename for client project

### Step 2 - Backend
- Create new service in Render
- Connect GitHub repository
- Configure environment variables

### Step 3 - Frontend
- Create new project in Vercel
- Connect repository
- Set API URL

### Step 4 - Database
- Provision PostgreSQL database
- Create credentials
- Attach to backend service

## Environment Variables

Example:

API_URL=https://client-api.onrender.com
DATABASE_URL=postgresql://user:password@host/db
APP_ENV=production

## Domain Setup (optional)

- Add custom domain in Vercel
- Add API subdomain in Render
- Configure DNS records (CNAME / A records)

## Validation Checklist

- Frontend is accessible
- Backend API responds correctly
- Database connection is active
- Environment variables are correctly set
- Logs show no errors

## Delivery

Once validated:

- Provide access URLs
- Provide admin credentials
- Provide basic usage documentation
- Confirm monitoring is active
