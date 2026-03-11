/**
 * Domain models and API response payload interfaces for FeedGuard
 */

// --- Dashboard ---
export interface DashboardStats {
    totalHouseholds: number;
    criticalAlerts: number;
    avgMealsPerDay: number;
    recentResponses: number;
    growth: string;
}

export interface TrendData {
    name: string;
    stable: number;
    atRisk: number;
    critical: number;
}

export interface RegionBreakdown {
    region: string;
    households: string;
    risk: string;
    trend: string;
    status: string;
    critical: number;
    atRisk: number;
    stable: number;
}

export interface MealFrequency {
    name: string;
    value: number;
    fill: string;
}

// --- Alerts ---
export interface Alert {
    id: string;
    region: string;
    type: string;
    message: string;
    time: string;
    affected: number;
    status: string;
}

export interface AlertActionResponse {
    id: string;
    status: string;
    resolved_at?: string;
    updated_at?: string;
}

export interface AlertStats {
    total: number;
    critical: number;
    warning: number;
    info: number;
    resolved: number;
    active: number;
}

export interface GenerateAlertsResponse {
    message: string;
    count: number;
}

// --- Reports ---
export interface ReportSummary {
    totalReports: number;
    critical: number;
    warning: number;
    stable: number;
    avgCompleteness: number;
}

export interface DetailedReport {
    id: string;
    region: string;
    date: string;
    time: string;
    households: number;
    reporting: number;
    stable: number;
    atRisk: number;
    critical: number;
    status: string;
    trend: string;
    completeness: number;
}

export interface ReportInsight {
    totalHouseholds: number;
    avgMealsPerDay: number;
    criticalAlerts: number;
    prediction: string;
    predictionText: string;
}

// --- Map ---
export interface MapRegion {
    id: number;
    name:string;
    population:number;
    info:string;
    lat: number;
    lng: number;
    region: string;
    status: string;
    households: number;
    risk: string;
    mealsPerDay: number;
    daysOfFood: number;
}

export interface MapRegionDetails {
    id: number;
    region: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    status: string;
    households: number;
    riskLevel: string;
    lastUpdated: string;
}

// --- Food Reports (Mobile App) ---
export interface FoodReportPayload {
    citizen_id: string;
    meals_per_day: number;
    days_of_food_left: number;
    food_change_type: string;
    shocks_experienced: string[];
    channel: string;
}

export interface FoodReportResponse {
    message: string;
    response: {
        id: string;
        food_security_score: number;
        risk_level: string;
        submitted_at: string;
    };
}

export interface FoodReportHistory {
    id: string;
    date: string;
    time: string;
    meals_per_day: number;
    days_of_food_left: number;
    food_change_type: string;
    shocks_experienced: string[];
    risk_level: string;
    food_security_score: number;
}

export interface FoodReportStats {
    totalReports: number;
    riskDistribution: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    averageMealsPerDay: number;
    averageDaysOfFood: number;
}

// --- SMS Surveys ---
export interface SmsStartPayload {
    citizen_id: string;
    survey_id: string;
}

export interface SmsStartResponse {
    success: boolean;
    responseId: string;
}

export interface SmsReceivePayload {
    from: string;
    message: string;
    date: string;
    id: string;
}

export interface SmsInvitePayload {
    survey_id: string;
    region_ids: string[];
}

export interface SmsInviteResponse {
    success: boolean;
    invitationsSent: number;
    message: string;
}

export interface SmsStats {
    activeSessions: number;
    totalCitizens: number;
    publishedSurveys: number;
}

export interface SurveyCreatePayload {
    title?: string;
    description?: string;
    region_ids?: string[];
}

export interface SurveyCreateResponse {
    survey: {
        id: string;
        title: string;
        status: string;
    };
    questions: Array<{
        text: string;
        type: string;
        order_index: number;
    }>;
    message: string;
}

// --- Users ---
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

export interface CreateUserPayload {
    name: string;
    email: string;
    password?: string;
    role: string;
}

export interface UpdateUserPayload {
    name?: string;
    email?: string;
    role?: string;
}

// --- Authentication ---
export interface AuthResponse {
    message: string;
    user: User;
    token: string;
}

// --- Locations ---
export interface FeedGuardLocation {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    district: string;
    sector: string;
    village: string;
}

export interface CreateLocationPayload {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    district: string;
    sector: string;
    village: string;
}

export interface UpdateLocationPayload {
    name?: string;
    latitude?: number;
    longitude?: number;
    country?: string;
    province?: string;
    district?: string;
    sector?: string;
    village?: string;
}

// --- Citizens ---
export interface Citizen {
    id: string;
    name: string;
    phone: string;
    location_id: string;
    created_at: string;
}

export interface CreateCitizenPayload {
    name: string;
    phone: string;
    location_id: string;
}

export interface UpdateCitizenPayload {
    name?: string;
    phone?: string;
    location_id?: string;
}

// --- Questions ---
export interface Question {
    id: string;
    text: string;
    type: string;
    order_index: number;
    required?: boolean;
}

export interface CreateQuestionPayload {
    text: string;
    type: string;
    order_index: number;
    required?: boolean;
}

export interface UpdateQuestionPayload {
    text?: string;
    type?: string;
    order_index?: number;
    required?: boolean;
}

// --- Question Logic ---
export interface QuestionLogic {
    id: string;
    question_id: string;
    condition: string;
    value: string;
    action: string;
    target_question_id: string;
}

export interface CreateQuestionLogicPayload {
    question_id: string;
    condition: string;
    value: string;
    action: string;
    target_question_id: string;
}

export interface UpdateQuestionLogicPayload {
    condition?: string;
    value?: string;
    action?: string;
    target_question_id?: string;
}

// --- Survey Responses ---
export interface SurveyResponse {
    id: string;
    citizen_id: string;
    survey_id: string;
    answers: string[];
    submitted_at: string;
}

export interface CreateSurveyResponsePayload {
    citizen_id: string;
    survey_id: string;
    answers: string[];
}

export interface UpdateSurveyResponsePayload {
    answers: string[];
}

// --- Surveys ---
export interface Survey {
    id: string;
    title: string;
    description: string;
    status: string;
    created_at: string;
}

export interface CreateSurveyPayload {
    title: string;
    description: string;
    region_ids?: string[];
}

export interface UpdateSurveyPayload {
    title?: string;
    description?: string;
}

export interface ChangePasswordPayload {
    currentPassword?: string;
    newPassword?: string;
}
