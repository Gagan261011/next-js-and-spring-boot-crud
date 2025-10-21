FROM eclipse-temurin:17-jre-alpine
RUN apk add --no-cache curl
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENV JAVA_OPTS="-Xmx128m -Xms128m"
ENTRYPOINT ["java", "-jar", "/app.jar"]
