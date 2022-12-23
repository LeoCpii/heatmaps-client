RUN:=yarn



# LIBS #
UI:=ui
DESIGN:=design

# APPS #
WEB:=web

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

install:
	yarn

# ------------------ START ------------------ #

dev-ui:
	$(call run_in_workspace,$(UI),storybook)

dev-web:
	$(call run_in_workspace,$(WEB),start)

# ------------------ BUILD ------------------ #

build-ui:
	$(call run_in_workspace,$(UI),build)

build-design:
	$(call run_in_workspace,$(DESIGN),scss)

build-web:
	$(call run_in_workspace,$(WEB),build)

# ------------------ WATCH ------------------ #

watch-ui:
	$(call run_in_workspace,$(UI),watch)

watch-design:
	$(call run_in_workspace,$(DESIGN),watch)

# ------------------ CLEAR ------------------ #

define delete_build
	@echo delete_build $(1)
	rm -Rf ./packages/$(1)/dist
endef

clean-builds:
	$(call delete_build,projects/$(VIVA))
	$(call delete_build,projects/$(ZAP))
	$(call delete_build,shared/$(LIB))
	$(call delete_build,$(UI))
	$(call delete_build,shared/$(DTO))

define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./packages/$(1)/node_modules
endef

clean-dependencies:
	rm -Rf ./node_modules
	$(call delete_dependencies,projects/$(VIVA))
	$(call delete_dependencies,projects/$(ZAP))
	$(call delete_dependencies,shared/$(LIB))
	$(call delete_dependencies,shared/$(DTO))
	$(call delete_dependencies,$(UI))

clean-all: clean-dependencies clean-builds