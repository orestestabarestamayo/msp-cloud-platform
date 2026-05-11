# System Architecture - MSP Cloud Infrastructure Platform

This document describes the high-level architecture of the managed cloud infrastructure system.

## Overview

The system is composed of three main layers:

1. Frontend Layer
2. Backend Layer
3. Database Layer

All components are deployed in a cloud-managed environment and connected via secure APIs.

## Architecture Diagram

Internet
   ↓
Frontend (Vercel)
   ↓
API Layer (Render)
   ↓
Database (Managed PostgreSQL)

GitHub acts as:
- Source of truth
- CI/CD pipeline trigger
- Version control system

## Components

### Frontend
- Hosted on Vercel
- Serves UI to end users
- Communicates with backend via REST API

### Backend
- Hosted on Render
- Handles business logic
- Exposes REST API endpoints

### Database
- Managed PostgreSQL
- Stores application data
- Backed up automatically

## Data Flow

1. User accesses frontend (Vercel)
2. Frontend sends request to backend API (Render)
3. Backend processes request
4. Backend reads/writes to database
5. Response is returned to frontend

## Responsibility Model

### Infrastructure Provider (MSP)
- Hosting
- Monitoring
- Deployments
- Backups
- Recovery procedures

### Application Owner
- Business logic
- UI/UX changes
- Feature development
- Data model changes

## Design Principles

- Stateless frontend
- API-driven backend
- Managed database services
- CI/CD via GitHub
- Environment-based configuration
