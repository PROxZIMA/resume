.PHONY: src

%:
	@:

CC = lualatex
OWNER = Pratik Pingale's
SRC_DIR = src
RESUME_DIR = src/resume
CV_DIR = src/cv
RESUME_SRCS = $(shell find $(RESUME_DIR) -name '*.tex')
CV_SRCS = $(shell find $(CV_DIR) -name '*.tex')
COMPANY = $(filter-out $@,$(MAKECMDGOALS))

all: $(foreach x, coverletter cv resume, $x.pdf)

resume:
	$(CC) -output-directory=$(SRC_DIR) $(SRC_DIR)/resume.tex $(RESUME_SRCS)
	cp "$(SRC_DIR)/resume.pdf" "./$(OWNER) Resume.pdf"

cv:
	$(CC) -output-directory=$(SRC_DIR) $(SRC_DIR)/cv.tex $(CV_SRCS)
	cp "$(SRC_DIR)/cv.pdf" "./$(OWNER) CV.pdf"

clsample:
	$(CC) -output-directory=$(SRC_DIR) $(SRC_DIR)/coverletter.tex
	cp "$(SRC_DIR)/coverletter.pdf" "./$(OWNER) Cover Letter.pdf"

coverletter:
	$(CC) -output-directory=$(SRC_DIR) $(SRC_DIR)/$(COMPANY)-coverletter.tex
	cp "$(SRC_DIR)/$(COMPANY)-coverletter.pdf" "./$(OWNER) $(COMPANY)-Cover Letter.pdf"

clean:
	rm -rf $(SRC_DIR)/*.pdf
	rm -rf $(SRC_DIR)/*.aux
	rm -rf $(SRC_DIR)/*.log
