.PHONY: build-development
build-development: ## Build the development docker image.
	docker compose -f docker/development/docker-compose.yaml build

.PHONY: start-development
start-development: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yaml up -d

.PHONY: stop-development
stop-development: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yaml stop

.PHONY: stop-development
remove-development: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yaml down
