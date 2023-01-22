RUN:=yarn

# LIBS #
UI:=ui
LIB:=lib
DESIGN:=design

# WEB #
AUTH:=auth
PLATFORM:=platform

# DOCKER #
IMAGES:=app-$(AUTH) app-$(PLATFORM) orchestrator

# ------------------ SETUP ------------------ #

define run_in_workspace
	@echo --------------------------
	@echo $(1) - $(2)
	@echo --------------------------
	$(RUN) workspace @heatmaps/$(1) $(2)
endef

setup:
	make clean-all
	make install
	make build-all

install:
	yarn

# ------------------ START ------------------ #

dev-ui:
	$(call run_in_workspace,$(UI),storybook)

# --- [WEB] --- #

dev-auth:
	$(call run_in_workspace,$(AUTH),start)

dev-platform:
	$(call run_in_workspace,$(PLATFORM),start)

# ------------------ BUILD ------------------ #

build-lib:
	$(call run_in_workspace,$(LIB),build:prod)

build-ui:
	$(call run_in_workspace,$(UI),build)

build-design:
	$(call run_in_workspace,$(DESIGN),build:default)

build-auth:
	$(call run_in_workspace,$(AUTH),build)

build-platform:
	$(call run_in_workspace,$(PLATFORM),build)

build-all: build-design build-lib build-ui build-auth build-platform

# ------------------ WATCH ------------------ #

watch-lib:
	$(call run_in_workspace,$(LIB),watch)

watch-ui:
	$(call run_in_workspace,$(UI),watch)

watch-design:
	$(call run_in_workspace,$(DESIGN),watch)

# ------------------ TEST ------------------ #

test-ui:
	$(call run_in_workspace,$(UI),test)

# ------------------ DOCKER ------------------ #

docker-setup: docker-build docker-compose

docker-build:
	docker-compose build

docker-compose:
	docker-compose up

# ------------------ CLEAR ------------------ #

define delete_build
	@echo delete_build $(1)
	rm -Rf ./packages/$(1)/dist
endef

clean-builds:
	$(call delete_build,projects/web/$(AUTH))
	$(call delete_build,projects/web/$(PLATFORM))
	$(call delete_build,shared/$(UI))
	$(call delete_build,shared/$(LIB))
	$(call delete_build,shared/$(DESIGN))

define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./packages/$(1)/node_modules
endef

clean-dependencies:
	rm -Rf ./node_modules
	$(call delete_dependencies,projects/web/$(AUTH))
	$(call delete_dependencies,projects/web/$(PLATFORM))
	$(call delete_dependencies,shared/$(UI))
	$(call delete_dependencies,shared/$(LIB))
	$(call delete_dependencies,shared/$(DESIGN))

clean-all: clean-dependencies clean-builds
