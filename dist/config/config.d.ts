declare const _default: (() => {
    port: string;
    env: string;
    dbHost: string;
    dbPort: string;
    dbUser: string;
    dbPass: string;
    dbName: string;
    entities: string[];
    migrations: string[];
    jwtSecret: string;
    jwtExpiry: string;
    awsS3Bucket: string;
    awsS3AccessKey: string;
    awsS3KeySecret: string;
    sendgridKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: string;
    env: string;
    dbHost: string;
    dbPort: string;
    dbUser: string;
    dbPass: string;
    dbName: string;
    entities: string[];
    migrations: string[];
    jwtSecret: string;
    jwtExpiry: string;
    awsS3Bucket: string;
    awsS3AccessKey: string;
    awsS3KeySecret: string;
    sendgridKey: string;
}>;
export default _default;
