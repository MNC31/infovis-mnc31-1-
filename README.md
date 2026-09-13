# Defogger — Data Access & Privacy Visualization

This project is a visualization application developed for INFOSCI 301. It uses the original **Defogger repository** as the application and visualization foundation and incorporates data and concepts from the **PrivacyLeak-PII dataset on Hugging Face** to examine how personal-data labels and data access differ across platforms.

## Data sources

This project uses two complementary sources:

### 1. Defogger GitHub repository

The original application is based on the Defogger repository:

* Repository: `Vanellope7/Defogger`
* Platform: GitHub
* Frontend: Vue
* Backend: Django

The repository provides the application structure, visualization code, routing, and local data files used by the application.

The primary visualization data are located under:

```text
frontend/public/data/
```

The repository currently contains:

```text
frontend/public/data/
├── Customer Life Time value/
├── National Health and Nutrition Examination Survey/
└── cost_of_living_us/
```

The `cost_of_living_us` collection includes:

```text
cost_of_living_us/
├── attr_range.csv
├── attr_range.xlsx
├── cost_of_living_us.csv
└── sensitive_attr.json
```

These files represent the application-oriented side of the comparison: data are stored as repository files and are accessed by the visualization application.

### 2. PrivacyLeak-PII on Hugging Face

The second source is:

`raayraay/privacyleak-pii`

This dataset is used as the basis for the personal-data/PII comparison and the accompanying Hugging Face visualization.

The PrivacyLeak-PII source provides labeled fields including:

* `text`
* `pii_spans`
* `context_type`
* `locale`
* `is_canary`
* `sample_id`
* `in_forget_set`

The dataset identifies PII categories such as names, SSNs, phone numbers, addresses, email addresses, API keys, IP addresses, MAC addresses, IBANs, credit cards, and passports.

The accompanying Hugging Face Space uses a **static, source-derived snapshot** rather than making live queries to the dataset. It intentionally presents labels and abbreviated sample IDs without reproducing the underlying record text.

## Why use both sources?

The two sources provide different kinds of evidence.

| Aspect                 | Defogger / GitHub                         | PrivacyLeak-PII / Hugging Face           |
| ---------------------- | ----------------------------------------- | ---------------------------------------- |
| Primary purpose        | Visualization application                 | PII / privacy dataset                    |
| Data access            | Repository files                          | Dataset viewer / dataset files           |
| Main format            | CSV, XLSX, JSON                           | Dataset / Parquet                        |
| Application context    | Vue + Django                              | Static browser visualization             |
| Data organization      | Project folders and files                 | Dataset schema and labeled records       |
| Privacy information    | Sensitive-attribute configuration         | PII spans and categories                 |
| Forget-set information | Not the primary application structure     | `in_forget_set` field                    |
| Best used for          | Reproducing and extending the application | Examining labeled personal-data patterns |

The comparison therefore asks not only **what data are present**, but also **how the structure of each platform determines what a viewer can access and interpret**.

## Data-access comparison

The GitHub project follows an application-oriented access path:

```text
GitHub repository
      ↓
frontend/public/data/
      ↓
CSV / XLSX / JSON files
      ↓
Vue application
      ↓
Visualization
```

The Hugging Face source follows a dataset-oriented access path:

```text
Hugging Face dataset
      ↓
Dataset schema / viewer
      ↓
PII and metadata fields
      ↓
Source-derived snapshot
      ↓
Browser visualization
```

This distinction is important. GitHub exposes the relationship between the data and the software that uses the data. Hugging Face foregrounds the dataset itself, its schema, its labels, and its analytical interpretation.

## Privacy and interpretation

The Hugging Face Space should be interpreted as a visualization of **dataset labels**, not as evidence that a deployed AI system has actually exposed or remembered personal information.

The source-derived visualization includes forget-set membership, but a row being marked in or outside the forget set does not by itself demonstrate whether an AI model has remembered or forgotten that information.

In particular:

* A forget-set marker is a dataset-membership label.
* A row not marked in the forget set is not evidence of retained model knowledge.
* The visualization does not by itself demonstrate successful machine unlearning.
* The source dataset describes the identifiers as synthetic/canary data rather than real individuals' personal information.
* The visualization does not provide model-response evaluations, training logs, or before/after unlearning results.

These limitations are retained from the Hugging Face Space's interpretation framework.

## Project structure

The main application remains organized around the original Defogger project:

```text
infovis-mnc31/
├── frontend/
│   ├── public/
│   │   ├── data/
│   │   └── index.html
│   └── src/
│       ├── router/
│       └── views/
├── backend/
└── README.md
```

If the Hugging Face source files are added locally for reference, keep them in a separate directory rather than replacing the original Defogger files:

```text
infovis-mnc31/
├── frontend/
│   ├── public/
│   │   ├── data/
│   │   └── index.html
│   └── src/
├── huggingface/
│   └── privacyleak-pii/
│       ├── README.md
│       ├── index.html
│       └── data/
├── backend/
└── README.md
```

This separation makes the provenance of each source clear.

## Prerequisites

* npm = 8.1.0
* node = 14.16.0
* python = 3.9

## Usage

Double-click `start.bat` and use the web pages in full-screen mode.

## Attribution

### Application foundation

Defogger / GitHub repository:

`MNC31/infovis-mnc31`

### Dataset

PrivacyLeak-PII:

`raayraay/privacyleak-pii`

### Related visualization

The Hugging Face Space:

`dku-infosci301-Autumn2026/Michelle_Week2Reflection`

The project combines these sources for a comparative visualization of **data access, data organization, PII labeling, and the interpretation of privacy-related evidence**.
