# FROM ubuntu:22.04



FROM node:14


# 오른쪽이 docker 안
COPY . /class_build/
WORKDIR /class_build/





RUN yarn install
RUN yarn build

# CMD명령어는 저장이 안됨, RUN까지 저장
CMD yarn start   



