# Portfolio Server API Documentation

Base URL: `/api`

---

## Coding Platform Endpoints

### 1. Get LeetCode Stats

- **Endpoint:** `GET /api/coding-platforms/leetcode`
- **Description:** Returns user statistics from LeetCode.
- **Response Example:**
  ```json
  {
    "username": "your_leetcode_username",
    "totalSolved": 500,
    "ranking": 12345,
    "easySolved": 200,
    "mediumSolved": 200,
    "hardSolved": 100,
    "contributionPoints": 1000,
    "profileUrl": "https://leetcode.com/your_leetcode_username"
  }
  ```

---

### 2. Get Codeforces Stats

- **Endpoint:** `GET /api/coding-platforms/codeforces`
- **Description:** Returns user statistics from Codeforces.
- **Response Example:**
  ```json
  {
    "handle": "your_codeforces_handle",
    "rating": 1800,
    "maxRating": 2000,
    "rank": "Candidate Master",
    "contribution": 50,
    "profileUrl": "https://codeforces.com/profile/your_codeforces_handle"
  }
  ```

---

### 3. Get GeeksforGeeks (GFG) Stats

- **Endpoint:** `GET /api/coding-platforms/gfg`
- **Description:** Returns user statistics from GeeksforGeeks.
- **Response Example:**
  ```json
  {
    "username": "your_gfg_username",
    "problemsSolved": 300,
    "codingScore": 5000,
    "profileUrl": "https://auth.geeksforgeeks.org/user/your_gfg_username"
  }
  ```

---

### 4. Get CodeChef Stats

- **Endpoint:** `GET /api/coding-platforms/codechef`
- **Description:** Returns user statistics from CodeChef.
- **Response Example:**
  ```json
  {
    "username": "your_codechef_username",
    "rating": 2100,
    "stars": 5,
    "highestRating": 2200,
    "globalRank": 1000,
    "countryRank": 100,
    "profileUrl": "https://www.codechef.com/users/your_codechef_username"
  }
  ```

---

### 5. Get All Platform Stats

- **Endpoint:** `GET /api/coding-platforms/all`
- **Description:** Returns a combined object with stats from all supported platforms.
- **Response Example:**
  ```json
  {
    "leetcode": {
      /* ...leetcode stats... */
    },
    "codeforces": {
      /* ...codeforces stats... */
    },
    "gfg": {
      /* ...gfg stats... */
    },
    "codechef": {
      /* ...codechef stats... */
    }
  }
  ```

---

## Admin/Utility Endpoints

### 6. Refresh All Platform Data

- **Endpoint:** `GET /api/admin/refresh`
- **Description:** Triggers a manual refresh of all coding platform data (if implemented).
- **Response Example:**
  ```json
  {
    "status": "success",
    "message": "Data refreshed successfully"
  }
  ```

---

## Error Responses

- All endpoints return appropriate HTTP status codes:
  - `200 OK` for success
  - `400 Bad Request` for invalid input
  - `404 Not Found` if user/platform not found
  - `500 Internal Server Error` for server issues
- Error responses are in JSON:
  ```json
  {
    "status": "error",
    "message": "Description of the error"
  }
  ```

---

## Notes

- All endpoints return JSON.
- No authentication is required for public endpoints.
- Data is cached and periodically refreshed for performance.
- For more details, see in-code JSDoc comments and `docs/API.md` if available.

---

Let me know if you need request/response schema details or example requests for any specific endpoint!

# API Documentation

This document provides comprehensive details about the Coding Profiles API endpoints, which fetch coding profile data from various competitive programming platforms.

## Base URL

```
http://localhost:9000/api/v1
```

Replace with your production URL when deploying.

## Authentication

The API does not currently require authentication as it's designed for personal portfolio use. If needed, add appropriate authentication middleware for production deployment.

## Error Handling

All endpoints use a standard error format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Additional error details"],
  "stack": "Stack trace (only in development mode)"
}
```

Common HTTP status codes:

- `200`: Success
- `400`: Bad Request
- `404`: Resource Not Found
- `500`: Internal Server Error
- `503`: Service Unavailable (when platform data is inaccessible)

## API Endpoints

### Coding Platform Data

#### Get All Platform Data

Returns combined data from all supported coding platforms.

```
GET /codingPlatforms/all
```

**Response:**

```json
{
  "success": true,
  "data": {
    "leetcode": {
      // LeetCode user data
    },
    "codeforces": {
      // CodeForces user data
    },
    "codechef": {
      // CodeChef user data
    },
    "gfg": {
      // GeeksforGeeks user data
    }
  },
  "lastUpdated": "2025-06-22T10:00:00.000Z"
}
```

#### Get LeetCode Data

```
GET /codingPlatforms/leetcode
```

**Response:**

```json
{
  "success": true,
  "data": {
    "username": "mythical-UV",
    "totalSolved": 300,
    "ranking": 50000,
    "languages": ["JavaScript", "Python", "C++"],
    "problemsSolved": {
      "easy": 100,
      "medium": 150,
      "hard": 50
    },
    "submissionStats": {
      "totalSubmissions": 500,
      "acceptanceRate": 85.5
    },
    "badges": [
      // Badge data
    ],
    "recentSubmissions": [
      // Recent submission data
    ]
  },
  "lastUpdated": "2025-06-22T10:00:00.000Z"
}
```

#### Get CodeForces Data

```
GET /codingPlatforms/codeforces
```

**Response:**

```json
{
  "success": true,
  "data": {
    "handle": "yuvraj.mehta532",
    "rating": 1500,
    "rank": "Specialist",
    "maxRating": 1600,
    "maxRank": "Expert",
    "contribution": 10,
    "friendOfCount": 5,
    "lastOnlineTimeSeconds": 1625097600,
    "registrationTimeSeconds": 1595097600,
    "problemsSolved": 100,
    "contestsParticipated": 20,
    "submissions": [
      // Submission history
    ]
  },
  "lastUpdated": "2025-06-22T10:00:00.000Z"
}
```

#### Get CodeChef Data

```
GET /codingPlatforms/codechef
```

**Response:**

```json
{
  "success": true,
  "data": {
    "username": "quick_unity_53",
    "rating": 1700,
    "stars": 3,
    "highestRating": 1800,
    "globalRank": 10000,
    "countryRank": 1000,
    "problemsSolved": 120,
    "contests": [
      // Contest history
    ],
    "badges": [
      // Badge data
    ]
  },
  "lastUpdated": "2025-06-22T10:00:00.000Z"
}
```

#### Get GeeksForGeeks (GFG) Data

```
GET /codingPlatforms/gfg
```

**Response:**

```json
{
  "success": true,
  "data": {
    "username": "yuvrajmevbrx",
    "institution": "Example University",
    "score": 500,
    "rank": 5000,
    "problemsSolved": 150,
    "codingScore": 300,
    "monthlyCoding": 50,
    "weeklyStreak": 10,
    "totalSubmissions": 200,
    "badges": [
      // Badge data
    ]
  },
  "lastUpdated": "2025-06-22T10:00:00.000Z"
}
```

### Admin Endpoints

#### Check Server Status

```
GET /admin/check-status
```

**Response:**

```json
{
  "success": true,
  "message": "Server is running"
}
```

#### Check Update Scheduler Status

```
GET /admin/update-status
```

**Response:**

```json
{
  "success": true,
  "message": "Scheduler is running",
  "schedule": "Every 6 hours"
}
```

#### Trigger Manual Update

Triggers an immediate update of all platform data.

```
POST /admin/trigger-update
```

**Response:**

```json
{
  "success": true,
  "message": "Manual update completed",
  "result": {
    "successful": 4,
    "total": 4
  }
}
```

### Health Check

```
GET /health
```

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2025-06-22T10:00:00.000Z",
  "uptime": 3600,
  "memory": {
    "rss": "50MB",
    "heapUsed": "20MB"
  }
}
```

## Data Update Schedule

The server automatically updates all platform data every 6 hours using a background scheduler. Data is stored in JSON files and processed for optimized response delivery.

## Rate Limiting

Currently, no rate limiting is implemented for API endpoints. For production deployment, consider adding appropriate rate limiting to protect the server.

## CORS Configuration

The server implements CORS protection. Only origins specified in the `ALLOWED_ORIGINS` environment variable can access the API endpoints.

## Further Information

For implementation details, check the [GitHub repository](https://github.com/yourusername/portfolio) or contact the maintainer.
