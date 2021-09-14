<template>
  <div class="container">
    <img class="img" src="src/assets/cards/singlecomm.png" />
    <h2 class="role">Software Developer</h2>
    <h2 class="date">June 11th 2018 - October 2nd, 2020</h2>
    <ul class="text">
      <li>Certified as an AWS Developer Associate (August 2018)</li>
      <li>
        Deployed or utilized the following AWS services for developing
        multi-tenant web applications: Lambda, API Gateway, X-Ray, CloudWatch,
        DynamoDB, RDS (Aurora & Aurora Serverless), Redshift, CloudFormation,
        Cognito, EC2, Systems Manager, Kinesis, SNS, SQS, KMS, S3, CodePipeline,
        CodeBuild, Route53, and ElastiCache
      </li>
      <li>
        Migrated a legacy, monolithic application to a modern, distributed
        monolith
      </li>
      <li>Developed backend microservices using Python and NodeJS</li>
      <li>
        Utilized CloudFormation, Serverless Framework, and AWS Severless
        Application Model (SAM) templates to deploy infrastructure as code
      </li>
      <li>
        Created pipelines, libraries, and deployment patterns for development,
        quality assurance, and production environments across multiple AWS
        accounts
      </li>
      <li>
        Designed patterns and implemented business logic for accessing DynamoDB
        NoSQL database for session runtime environment
      </li>
      <li>
        Created server-to-server authorization using Cognito Auth across API
        Gateway resources
      </li>
      <li>
        Created a data sync service for migrating data from an internal, legacy
        database to an AWS Cloud Aurora PostgreSQL database using Lambda, SQS,
        and Kinesis
      </li>
      <li>
        Added features and resolved bugs on legacy Angular JS applications
      </li>
      <li>
        Rewrote legacy applications from Angular JS (Angular 1) to Angular 8 for
        improved security, testing, and dependency support
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingleCommCard",
});
</script>

<style scoped lang="scss">
.container {
  background: #f87171;
  display: grid;
  grid-template-areas:
    "img txt"
    "img txt"
    "role txt"
    "date txt";
  margin-top: 10%;
  margin-left: 10%;
  width: 60%;
  border-radius: 0.5rem;
}

.img {
  grid-area: img;
  justify-self: center;
  align-self: center;
  height: 7vh;
  margin: 3em;
}
.role {
  grid-area: role;
  font-size: 1.2em;
  justify-self: center;
  align-self: start;
}
.date {
  grid-area: date;
  font-size: 1em;
  justify-self: center;
  align-self: start;
  margin-bottom: 1.5em;
}
.text {
  grid-area: txt;
}
</style>