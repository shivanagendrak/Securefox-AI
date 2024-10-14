
---

# SecureFox AI - AI-Powered Cybersecurity Scanning and Automation Platform

## Overview
SecureFox AI is a powerful web-based platform that leverages AI to provide advanced cybersecurity scanning, threat detection, and automated solutions. The platform is designed to make it easy for businesses, especially small and medium-sized enterprises (SMEs), to identify and mitigate cybersecurity vulnerabilities without needing in-depth technical knowledge.

## Features
- **Security Scans**: Automatically scan websites and IP addresses for vulnerabilities using a combination of open-source cybersecurity tools.
- **Real-Time Dashboard**: View a comprehensive security overview, showing potential vulnerabilities and the percentage of threats mitigated.
- **AI-Driven Insights**: Receive AI-powered recommendations for patching and securing your systems, tailored to the specific vulnerabilities found.
- **Automation**: Schedule automated scans and receive alerts when critical vulnerabilities are detected.
- **Vulnerability Funnel**: Visual representation of vulnerabilities broken down into categories such as critical, high, medium, and low risks.
- **Integration with Open-Source Tools**: The backend utilizes FastAPI, integrates with free cybersecurity APIs, and provides real-time data processing.

## Installation

### Prerequisites
- Node.js
- MongoDB (for storing scan results)
- FastAPI (for the backend API)

### Frontend (Next.js)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/securefox-ai.git
    ```
2. Navigate to the project folder:
    ```bash
    cd securefox-ai
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

### Backend (FastAPI)
1. Set up your FastAPI server by following the documentation at: [FastAPI Swagger UI](https://api2.quizziebot.com/docs#/default/wrap_api_wrap_api__post).
2. Ensure your MongoDB database is configured to store scan results and API integrations.

## Usage
1. Open the frontend in your browser by navigating to `http://localhost:3000`.
2. Enter a domain or IP address in the **Security Scan** field and initiate a scan.
3. Review the security overview, AI insights, and generated recommendations based on your scan results.
4. Automate scans by configuring the **Automation Settings**.

## API Endpoints
- **FastAPI Endpoint for Scan**:
    - Base URL: `https://api2.quizziebot.com`
    - Endpoint: `/wrap-api`
    - Method: POST
    - Example request body:
    ```json
    {
      "query_url": "https://example.com"
    }
    ```

## Technologies Used
- **Frontend**: Next.js, React, Tailwind CSS, Radix UI components
- **Backend**: FastAPI, MongoDB, Open-Source Cybersecurity APIs
- **AI**: AI integration for providing actionable recommendations

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the changes (`git push origin feature-branch`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License.
