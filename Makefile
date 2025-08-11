dev:
	cd apps/web && pnpm dev

build:
	cd apps/web && pnpm build

start:
	cd apps/web && pnpm start

install:
	pnpm install

clean:
	cd apps/web && pnpm clean

lint:
	cd apps/web && pnpm lint

test:
	cd apps/web && pnpm test

# Docker commands
docker-build:
	docker compose -f ops/docker-compose.yml build

docker-up:
	docker compose -f ops/docker-compose.yml up

docker-down:
	docker compose -f ops/docker-compose.yml down

# Development setup
dev-init:
	bash scripts/dev.init.sh