FROM eclipse-temurin:17-jre-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENV JAVA_OPTS="-Xmx256m -Xms256m"
ENTRYPOINT ["java", "-jar", "/app.jar"]
