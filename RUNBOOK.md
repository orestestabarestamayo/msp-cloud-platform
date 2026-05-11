# Runbook - MSP Cloud Infrastructure

This document defines operational procedures for maintaining and recovering the system.

## Restart Backend Service

Platform: Render

Steps:
1. Access Render Dashboard
2. Select backend service
3. Click "Restart"
4. Wait for health check to pass

## Database Health Check

- Check connection status in Render PostgreSQL
- Verify last backup timestamp
- Test connection string from backend

## Deployment Process

Platform: GitHub → Vercel / Render

Steps:
1. Push code to main branch
2. GitHub triggers CI/CD
3. Vercel deploys frontend
4. Render deploys backend
5. Verify logs and health status

## Disaster Recovery - Database Restore

Steps:
1. Access database backup panel
2. Select latest stable backup
3. Restore to new instance
4. Update connection string
5. Restart backend service

## System Status Check

- Frontend: Online (Vercel)
- Backend: Healthy (Render)
- Database: Connected
- API Response: OK

  
