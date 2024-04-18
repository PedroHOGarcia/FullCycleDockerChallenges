FROM golang:latest as builder

WORKDIR /go/src/

COPY ./go/fullcycle_rocks.go .

RUN go build fullcycle_rocks.go

FROM scratch

COPY --from=builder /go/src/fullcycle_rocks .

ENTRYPOINT [ "./fullcycle_rocks" ]