---
title: "Machine Learning Toolbox"
permalink: /toolbox/
date: 2020-09-27T15:45-00:00
last_modified_at: 2021-05-15T00:00:00-00:00
excerpt: A curated list of libraries for all phases of the Machine Learning workflow   
header:
  og_image: /images/toolbox.png
  teaser: "/images/toolbox.png"
toc: true
toc_sticky: true
---

This page contains useful libraries I've found when working on Machine Learning projects.  Most of the information is [here].(https://amitness.com/){:target="_blank"} Page is continuously being updated.

The libraries are organized below by phases of a typical Machine Learning project.  

## Phase: Data
### Data Annotation  

|Category|Tool|Remarks|
|---|---|---|
|Audio | [audio-annotator](https://github.com/CrowdCurio/audio-annotator), [audiono](https://github.com/midas-research/audino)||
|General| [superintendent](https://superintendent.readthedocs.io/en/latest/installation.html), [pigeon](https://github.com/agermanidis/pigeon)|Annotate in notebooks|
|| [labelstudio](https://labelstud.io/)|Open Source Data Labeling Tool|
||[awesome-data-labeling](https://github.com/heartexlabs/awesome-data-labeling)||
|Image | [makesense.ai](https://www.makesense.ai/), [labelimg](https://github.com/tzutalin/labelImg), [via](http://www.robots.ox.ac.uk/~vgg/software/via/), [cvat](https://github.com/openvinotoolkit/cvat)||
|Text | [doccano](https://doccano.herokuapp.com/), [brat](http://brat.nlplab.org/)||
||[chatito](https://github.com/rodrigopivi/Chatito)|Generate text datasets using DSL|
| | [prodigy](https://prodi.gy/)|Paid|
|Inter-rater agreement|[disagree](https://github.com/o-P-o/disagree)||
||[simpledorff](https://github.com/LightTag/simpledorff)|Krippendorff's Alpha|

### Data Collection  

|Category|Tool|Remarks|
|---|---|---|
|Curations| [datasetlist](https://www.datasetlist.com/), [UCI](https://archive.ics.uci.edu/ml/datasets.php), [Google Dataset Search](https://toolbox.google.com/datasetsearch), [fastai-datasets](https://course.fast.ai/datasets.html), [public-apis](https://github.com/public-apis/public-apis), [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets), [aws opendata](https://registry.opendata.aws/), [penn-ml-benchmark](https://epistasislab.github.io/pmlb/)||
||[huggingface-datasets](https://huggingface.co/datasets), [The Big Bad NLP Database](https://datasets.quantumstat.com/), [nlp-datasets](https://github.com/niderhoff/nlp-datasets), [nlp corpora](https://nlpforhackers.io/corpora/)|NLP Datasets|
||[bifrost](https://datasets.bifrost.ai/), [VisualData](https://www.visualdata.io/), [roboflow](https://public.roboflow.com/)|Computer Vision Datasets|
|Words|[curse-words](https://github.com/reimertz/curse-words), [badwords](https://github.com/MauriceButler/badwords), [LDNOOBW](https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words), [10K most common words](https://github.com/first20hours/google-10000-english), [common-misspellings](https://bitbucket.org/bedizel/moe/src/master/data/)||
||[profanity](https://github.com/surge-ai/profanity)|Profane words|
||[wordlists](https://github.com/imsky/wordlists)|Words organized by topic|
||[english-words](https://github.com/dwyl/english-words)|A text file containing over 466k English words|
||[tf-idf-iif-top-100-wordlists](https://github.com/google-research-datasets/TF-IDF-IIF-top100-wordlists)|Top 100 distinctive words for each language|
||[freeling](https://github.com/ixa-ehu/matxin/tree/master/data/freeling/en/dictionary)|Dictionary of words grouped by POS|
||[catvar](https://clipdemos.umiacs.umd.edu/catvar/), [lemmatization-lists](https://github.com/michmech/lemmatization-lists), [unimorph-eng](https://raw.githubusercontent.com/unimorph/eng/master/eng)|Word variants|
|Text Corpus|[project gutenberg](https://www.gutenberg.org/), [nlp-datasets](https://github.com/niderhoff/nlp-datasets),  [1 trillion n-grams](https://catalog.ldc.upenn.edu/LDC2006T13), [litbank](https://github.com/dbamman/litbank), [BookCorpus](https://github.com/soskek/bookcorpus), [south-asian text corpus](https://github.com/google-research-datasets/dakshina)||
||[opus](http://opus.nlpl.eu/), [oscar (big multilingual corpus)](https://traces1.inria.fr/oscar/)|Translation Parallel Text|
||[pile](https://pile.eleuther.ai/)|825GB text corpus|
||[freebase](https://freebase-easy.cs.uni-freiburg.de/dump/)|Relation triples|
||[opensubtitles](http://opus.nlpl.eu/OpenSubtitles-v2018.php)|Movie subtitles parallel corpus|
||[lti-langid](http://www.cs.cmu.edu/~ralf/langid.html)|Language Identification Corpus for 1152 languages|
||[fandom-transcripts](https://transcripts.fandom.com/wiki/Transcripts_Wiki)|Movie and Series Transcripts|
||[cognet](https://github.com/kbatsuren/CogNet)|Cognates for 338 languages|
||[wold](https://wold.clld.org/)|Loan words|
|Sentiment|[SST2](https://github.com/clairett/pytorch-sentiment-classification/tree/master/data/SST2), [Amazon Reviews](https://www.kaggle.com/bittlingmayer/amazonreviews), [Yelp Reviews](https://www.kaggle.com/yelp-dataset/yelp-dataset), [Movie Reviews](http://www.cs.cornell.edu/people/pabo/movie-review-data/), [Food Reviews](https://www.kaggle.com/snap/amazon-fine-food-reviews), [Twitter Airline](https://www.kaggle.com/crowdflower/twitter-airline-sentiment), [GOP Debate](https://www.kaggle.com/crowdflower/first-gop-debate-twitter-sentiment), [Sentiment Lexicons for 81 languages](https://www.kaggle.com/rtatman/sentiment-lexicons-for-81-languages), [SentiWordNet](https://github.com/aesuli/SentiWordNet), [Opinion Lexicon](https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html#lexicon), [Wordstat words](https://provalisresearch.com/products/content-analysis-software/wordstat-dictionary/sentiment-dictionaries/), [Emoticon Sentiment](http://people.few.eur.nl/hogenboom/files/EmoticonSentimentLexicon.zip), [socialsent](https://nlp.stanford.edu/projects/socialsent/)||
|Emotion|[NRC-Emotion-Lexicon-Wordlevel](https://raw.githubusercontent.com/dinbav/LeXmo/master/NRC-Emotion-Lexicon-Wordlevel-v0.92.txt), [ISEAR(17K)](https://github.com/PoorvaRane/Emotion-Detector/blob/master/ISEAR.csv), [HappyDB](https://megagon.ai/projects/happydb-a-happiness-database-of-100000-happy-moments/), [emotion-to-emoji-mapping](https://github.com/ErKiran/TwitterBot/blob/master/emoji.json)|
||[EmoTag1200](https://github.com/abushoeb/emotag)|Emoji-Emotion scores|
|NLU Intents|[rasa-nlu-training-data](https://github.com/RasaHQ/NLU-training-data)||
|N-grams|[google-book-ngrams](http://storage.googleapis.com/books/ngrams/books/datasetsv2.html), [norvig-processed-ngrams](https://norvig.com/ngrams/)||
|Word Frequency|[wordfreq](https://github.com/LuminosoInsight/wordfreq),[key-nbc](https://github.com/dougalg/Key-BNC/blob/master/key_bnc_cli/BNC_wordlist.csv)||
|Summarization|[curation-corpus](https://github.com/CurationCorp/curation-corpus)||
|Conversations|[conversational-datasets](https://github.com/PolyAI-LDN/conversational-datasets), [cornell-movie-dialog-corpus](https://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html), [persona-chat](https://github.com/facebookresearch/ParlAI/blob/master/parlai/tasks/personachat/build.py), [DialogDatasets](https://breakend.github.io/DialogDatasets/)||
|Semantic Parsing|[wikisql](https://github.com/salesforce/WikiSQL), [spider](https://yale-lily.github.io/spider)|Text to SQL|
||[WebQuestions](https://github.com/brmson/dataset-factoid-webquestions), [ComplexWebQuestions](https://allenai.org/data/complexwebquestions)|Text to Knowledge Graph|
||[CoNaLa](https://conala-corpus.github.io/), [CONCODE](https://github.com/sriniiyer/concode)|Text to program|
||[amrlib](https://github.com/bjascob/amrlib)|Parse AMR data|
|Image|[1 million fake faces](https://archive.org/details/1mFakeFaces), [flickr-faces](https://github.com/NVlabs/ffhq-dataset), [objectnet](https://objectnet.dev/), [YFCC100m](http://projects.dfki.uni-kl.de/yfcc100m/), [USPS](https://www.kaggle.com/bistaumanga/usps-dataset), [Animal Faces-HQ dataset (AFHQ)](https://github.com/clovaai/stargan-v2/blob/master/README.md#animal-faces-hq-dataset-afhq)||
||[tiny-images](https://tiny-imagenet.herokuapp.com/),[SVHN](http://ufldl.stanford.edu/housenumbers/), [STL-10](http://ai.stanford.edu/~acoates/stl10/), [imagenette](https://github.com/fastai/imagenette), [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html)|Small image datasets for quick experimentation|
|| [omniglot](https://github.com/brendenlake/omniglot), [mini-imagenet](https://github.com/yaoyao-liu/mini-imagenet-tools)|One Shot Learning |
|Paraphrasing| [PPDB](http://paraphrase.org/)||
|Audio | [audioset](https://research.google.com/audioset/index.html)|YouTube audio with labels|
|Speech|[voxforge](http://www.voxforge.org/), [openslr](https://openslr.org/), [cmu wilderness](http://festvox.org/cmu_wilderness/), [commonvoice](https://commonvoice.mozilla.org/en/datasets)||
|Speech synthesis|[CMU Artic](http://www.festvox.org/cmu_arctic/)||
|Graphs| [Social Networks (Github, Facebook, Reddit)](https://github.com/benedekrozemberczki/datasets)||
|Handwriting| [iam-handwriting](http://www.fki.inf.unibe.ch/databases/iam-on-line-handwriting-database)||
||[text_renderer](https://github.com/oh-my-ocr/text_renderer)|Generate synthetic OCR text|

### Importing Data  

|Category|Tool|Remarks|
|---|---|---|
| Prebuilt| [openml](https://openml.github.io/openml-python), [lineflow](https://github.com/tofunlp/lineflow)||
||[rs_datasets](https://darel13712.github.io/rs_datasets/)|Recommendation Datasets|
||[nlp](https://github.com/huggingface/nlp)|Python interface to NLP datasets|
||[tensorflow_datasets](https://github.com/tensorflow/datasets)|Access datasets in Tensorflow|
||[hub](https://github.com/activeloopai/Hub)|Prebuild datasets for PyTorch and Tensorflow|
|| [pydataset](https://github.com/iamaziz/PyDataset)||
||[ir_datasets](https://github.com/allenai/ir_datasets/)|Information Retrieval Datasets|
|App Store| [google-play-scraper](https://github.com/JoMingyu/google-play-scraper)||
|Arxiv|[pyarxiv](https://pypi.org/project/pyarxiv/)|Programmatic access to arxiv.org|
|Audio| [pydub](https://github.com/jiaaro/pydub)||
|Crawling| [MechanicalSoup](https://github.com/MechanicalSoup/MechanicalSoup), [libextract](https://github.com/datalib/libextract)||
|| [pyppeteer](https://github.com/pyppeteer/pyppeteer)|Chrome Automation|
||[trafilatura](https://github.com/adbar/trafilatura)|Extract text sections from HTML|
||[justext](https://github.com/miso-belica/jusText)|Remove boilerplate from scraped HTML|
||[hext](https://hext.thomastrapp.com/)|DSL for extracting data from HTML|
||[ratelimit](https://pypi.org/project/ratelimit/)|API rate limit decorator|
||[backoff](https://github.com/litl/backoff)|Exponential backoff and jitter|
||[asks](https://github.com/theelous3/asks)|Async version of requests|
||[requests-cache](https://github.com/reclosedev/requests-cache)|Cached version of requests|
||[html2text](https://github.com/Alir3z4/html2text/)|Convert HTML to markdown-formatted plain text|
|Database| [blaze](https://github.com/blaze/blaze)|Pandas and Numpy interface to databases|
|Email| [talon](https://github.com/mailgun/talon)||
|Excel| [openpyxl](https://openpyxl.readthedocs.io/en/stable/)||
|Google Drive| [gdown](https://github.com/wkentaro/gdown), [pydrive](https://pythonhosted.org/PyDrive/index.html)||
|Google Maps| [geo-heatmap](https://github.com/luka1199/geo-heatmap)||
|Google Search|[googlesearch](https://github.com/Nv7-GitHub/googlesearch)|Parse google search results|
|Google Sheets| [gspread](https://github.com/burnash/gspread)||
|Google Ngrams|[google-ngram-downloader](https://github.com/dimazest/google-ngram-downloader)||
|HTML|[python-readability](https://github.com/buriy/python-readability), [html-text](https://github.com/TeamHG-Memex/html-text)|HTML to Text|
|Image| [py-image-dataset-generator](https://github.com/tomahim/py-image-dataset-generator), [idt](https://github.com/deliton/idt), [jmd-imagescraper](https://joedockrill.github.io/jmd_imagescraper/)|Auto fetch images from web for certain search|
| Video| [moviepy](https://zulko.github.io/moviepy/)|Edit Videos|
|| [pytube](https://github.com/nficano/pytube)|Download youtube vidoes|
|Lyrics| [lyricsgenius](https://github.com/johnwmillr/LyricsGenius)||
|Machine Translation Corpus|[mtdata](https://github.com/thammegowda/mtdata)||
|News| [news-please](https://github.com/fhamborg/news-please), [news-catcher](https://github.com/kotartemiy/newscatcher/blob/master/README.md)|Scrap News|
||[pygooglenews](https://github.com/kotartemiy/pygooglenews)|Google News|
|Network Packet|[dpkt](https://dpkt.readthedocs.io/en/latest/index.html), [scapy](https://scapy.readthedocs.io/en/latest/introduction.html)||
|PDF| [camelot](https://camelot-py.readthedocs.io/en/master/), [tabula-py](https://github.com/chezou/tabula-py), [parsr](https://github.com/axa-group/Parsr), [pdftotext](https://pypi.org/project/pdftotext/), [pdfplumber](https://github.com/jsvine/pdfplumber), [pymupdf](https://pymupdf.readthedocs.io/en/latest/intro.html)||
||[grobid](https://grobid.readthedocs.io/en/latest/Introduction/)|Parse PDF into structured XML|
||[PyPDF2](https://github.com/mstamy2/PyPDF2)|Read and write PDF in Python|
||[pdf2image](https://github.com/Belval/pdf2image)|Convert PDF to image|
|Remote file| [smart_open](https://github.com/RaRe-Technologies/smart_open)||
|Text to Speech| [gtts](https://github.com/pndurette/gTTS)||
|Twitter| [twint](https://github.com/twintproject/twint), [tweepy](https://github.com/tweepy/tweepy), [twarc](https://twarc-project.readthedocs.io/en/latest/)|Scrape Twitter|
|Wikipedia| [wikipedia](https://pypi.org/project/wikipedia/), [wikitextparser](https://github.com/5j9/wikitextparser)|Access data from wikipedia|
||[wikitables](https://wikitables.readthedocs.io/en/latest/)|Import table from wikipedia article|
|Wikidata|[wikidata](https://github.com/dahlia/wikidata)|Python API to wikidata|
|XML|[xmltodict](https://github.com/martinblech/xmltodict)|Parse XML as python dictionary|
|YouTube|[scrapetube](https://github.com/dermasmid/scrapetube)|Scrape video metadata from channel|

### Data Augmentation  

|Category|Tool|Remarks|
|---|---|---|
|Audio|[audiomentations](https://github.com/iver56/audiomentations), [muda](https://github.com/bmcfee/muda)||
|Image|[imgaug](https://github.com/aleju/imgaug/), [albumentations](https://github.com/albumentations-team/albumentations), [augmentor](https://github.com/mdbloice/Augmentor), [solt](https://mipt-oulu.github.io/solt/index.html)||
||[deepaugment](https://pypi.org/project/deepaugment/)|Automatic augmentation|
||[TextRecognitionDataGenerator](https://github.com/Belval/TextRecognitionDataGenerator), [genalog](https://github.com/microsoft/genalog)|OCR|
|Tabular data|[deltapy](https://github.com/firmai/deltapy)||
||[mockaroo](https://mockaroo.com/)|Generate synthetic user details|
|Text|[nlpaug](https://github.com/makcedward/nlpaug), [noisemix](https://github.com/noisemix/noisemix), [textattack](https://github.com/QData/TextAttack), [textaugment](https://github.com/dsfsi/textaugment), [niacin](https://github.com/deniederhut/niacin), [SeaQuBe](https://github.com/bees4ever/SeaQuBe), [DataAug4NLP](https://github.com/styfeng/DataAug4NLP), [NL-Augmenter](https://github.com/GEM-benchmark/NL-Augmenter)||
||[fastent](https://fastent.github.io/docs/)|Expand NER entity list|

## Phase: Exploration

###  Data Preparation  

|Category|Tool|Remarks|
|---|---|---|
| Class Imbalance| [imblearn](https://imbalanced-learn.org/stable/)||
| Categorical encoding| [category_encoders](https://github.com/scikit-learn-contrib/category_encoders)||
||[dirty_cat](https://dirty-cat.github.io/stable/)|Encode cateogories with typos|
|Dataframe| [cudf](https://github.com/rapidsai/cudf)|Pandas on GPU|
| Data Validation| [pandera](https://github.com/pandera-dev/pandera), [pandas-profiling](https://github.com/pandas-profiling/pandas-profiling)|Pandas|
| Data Cleaning| [pyjanitor](https://github.com/ericmjl/pyjanitor)|Janitor ported to python|
| Graph Sampling| [little ball of fur](https://github.com/benedekrozemberczki/littleballoffur)||
| Missing values| [missingno](https://github.com/ResidentMario/missingno)||
|Parallelize| [pandarallel](https://github.com/nalepae/pandarallel), [swifter](https://github.com/jmcarpenter2/swifter), [modin](https://github.com/modin-project/modin)|Parallelize pandas|
||[vaex](https://github.com/vaexio/vaex)|Pandas on huge data|
|| [numba](http://numba.pydata.org/)|Parallelize numpy|
| Parsing| [pyparsing](https://pyparsing-docs.readthedocs.io/en/latest/index.html), [parse](https://pypi.org/project/parse/)||
| Split images into train/validation/test| [split-folders](https://github.com/jfilter/split-folders)||
|Submodular Optimization|[twinning](https://github.com/avkl/twinning), [apricot](https://github.com/jmschrei/apricot)||
| Weak Supervision| [snorkel](https://www.snorkel.org/get-started/)||

### Data Exploration  

|Category|Tool|Remarks|
|---|---|---|
|Explore Data|[sweetviz](https://pypi.org/project/sweetviz/), [dataprep](https://pypi.org/project/dataprep/), [quickda](https://medium.com/@gauty95/quickda-low-code-python-library-for-quick-exploratory-data-analysis-b4b1c3af369d), [vizidata](https://www.visidata.org/)|Generate quick visualizations of data|
||[ipyplot](https://pypi.org/project/ipyplot/)|Plot images|
|Notebook Tools| [nbdime](https://github.com/jupyter/nbdime)|View Jupyter notebooks through CLI|
|| [papermill](https://github.com/nteract/papermill)| Parametrize notebooks|
| | [nbformat](https://nbformat.readthedocs.io/en/latest/api.html)|Access notebooks programatically|
| | [nbconvert](https://nbconvert.readthedocs.io/en/latest/)|Convert notebooks to other formats|
| | [ipyleaflet](https://github.com/jupyter-widgets/ipyleaflet)|Maps in notebooks|
||[ipycanvas](https://github.com/martinRenou/ipycanvas)|Draw diagrams in notebook|
||[fastdoc](https://github.com/fastai/fastdoc)|Convert notebook to PDF book|
|Relationship|[ppscore](https://github.com/8080labs/ppscore)|Predictive Power Score|
||[pdpbox](https://github.com/SauceCat/PDPbox)|Partial Dependence Plot|

### Feature Generation  

|Category|Tool|Remarks|
|---|---|---|
|Automatic feature engineering|[featuretools](https://github.com/FeatureLabs/featuretools), [autopandas](https://autopandas.io/)||
|| [tsfresh](https://github.com/blue-yonder/tsfresh)|Automatic feature engineering for time series|
|DAG based dataset generation|[DFFML](https://intel.github.io/dffml/)||
|Dimensionality reduction|[fbpca](https://github.com/facebook/fbpca), [fitsne](https://github.com/KlugerLab/FIt-SNE), [trimap](https://github.com/eamid/trimap)||
|Metric learning|[metric-learn](http://contrib.scikit-learn.org/metric-learn/getting_started.html), [pytorch-metric-learning](https://github.com/KevinMusgrave/pytorch-metric-learning)||
|Time series|[python-holidays](https://github.com/dr-prodigy/python-holidays)|List of holidays|
||[skits](https://github.com/ethanrosenthal/skits)|Transformation for time-series data|
||[catch22](https://github.com/chlubba/catch22)|Pre-built features for time-series data|

## Phase: Modeling

### Model Selection  

|Category|Tool|Remarks|
|---|---|---|
|Project Structure|[cookiecutter-data-science](https://drivendata.github.io/cookiecutter-data-science/)||
| Find SOTA models| [sotawhat](https://sotawhat.herokuapp.com), [papers-with-code](https://paperswithcode.com/sota), [codalab](https://competitions.codalab.org/), [nlpprogress](https://nlpprogress.com/), [evalai](https://evalai.cloudcv.org/), [collectiveknowledge](https://cknowledge.io/reproduced-results/), [sotabench](https://sotabench.com)|Benchmarks|
||[bert-related-papers](https://github.com/tomohideshibata/BERT-related-papers)|BERT Papers|
||[survey-papers](https://github.com/NiuTrans/ABigSurvey)|Collection of survey papers|
| Pretrained models| [modeldepot](https://modeldepot.io/browse), [pytorch-hub](https://pytorch.org/hub)|General|
||[pretrained-models.pytorch](https://github.com/Cadene/pretrained-models.pytorch), [pytorchcv](https://pypi.org/project/pytorchcv/)|Pre-trained ConvNets|
||[pytorch-image-models](https://rwightman.github.io/pytorch-image-models/)|200+ pretrained ConvNet backbones|
| | [huggingface-models](https://huggingface.co/models), [huggingface-pretrained](https://huggingface.co/transformers/pretrained_models.html)|Transformer Models|
||[awesome-models](https://github.com/likedan/Awesome-CoreML-Models)|Pretrained CoreML models|
||[huggingface-languages](https://huggingface.co/languages)|Multi-lingual Models|
||[model-forge](https://models.quantumstat.com/), [The Super Duper NLP Repo](https://notebooks.quantumstat.com/)|Pre-trained NLP models by usecase|
| AutoML| [auto-sklearn](https://automl.github.io/auto-sklearn), [mljar-supervised](https://github.com/mljar/mljar-supervised), [automl-gs](https://github.com/minimaxir/automl-gs), [pycaret](https://pycaret.org/guide/), [evalml](https://evalml.alteryx.com/en/stable/install.html)||
||[lazypredict](https://github.com/shankarpandala/lazypredict)|Run all sklearn models at once|
||[tpot](https://github.com/EpistasisLab/tpot)|Genetic AutoML|
||[autocat](https://autocat.apps.allenai.org/)|Auto-generate text classification models in spacy|
|| [mindsdb](https://github.com/mindsdb/mindsdb), [lugwig](https://ludwig-ai.github.io/ludwig-docs/)|Autogenerate ML code|
| Active Learning| [modal](https://github.com/modAL-python/modAL)||
| Anomaly detection| [adtk](https://arundo-adtk.readthedocs-hosted.com/en/stable/install.html)||
| Contrastive Learning| [contrastive-learner](https://github.com/lucidrains/contrastive-learner)||
| Deep Clustering| [deep-clustering-toolbox](https://github.com/jizongFox/deep-clustering-toolbox)||
| Few Shot Learning| [keras-fewshotlearning](https://github.com/ClementWalter/Keras-FewShotLearning)||
| Fuzzy Learning| [fylearn](https://github.com/sorend/fylearn), [scikit-fuzzy](https://github.com/scikit-fuzzy/scikit-fuzzy)||
| Genetic Programming| [gplearn](https://gplearn.readthedocs.io/en/stable/index.html)||
| Gradient Boosting| [catboost](https://github.com/catboost/catboost), [xgboost](https://github.com/dmlc/xgboost), [ngboost](https://github.com/stanfordmlgroup/ngboost)||
||[lightgbm](https://github.com/Microsoft/LightGBM), [thunderbm](https://github.com/Xtra-Computing/thundergbm)|GPU Capable|
| Graph Neural Networks| [spektral](https://github.com/danielegrattarola/spektral/)|GNN for Keras|
| Graph Embedding and Community Detection| [karateclub](https://github.com/benedekrozemberczki/karateclub), [python-louvain](https://python-louvain.readthedocs.io/en/latest/), [communities](https://github.com/shobrook/communities)||
| Hidden Markov Models| [hmmlearn](https://github.com/hmmlearn/hmmlearn)||
|Interpretable Models|[imodels](https://github.com/csinva/imodels)|Models that show rules|
|Multi-view Learning|[mvlearn](https://mvlearn.github.io)||
| Noisy Label Learning| [cleanlab](https://github.com/cgnorthcutt/cleanlab)||
|Optimization|[nevergrad](https://github.com/facebookresearch/nevergrad)|Gradient Free Optimization|
||[cvxpy](https://github.com/cvxgrp/cvxpy)|Convex Optimization|
|Optimal Transport| [pot](https://pythonot.github.io/), [geomloss](https://www.kernel-operations.io/geomloss/)||
| Probabilistic modeling| [pomegranate](https://github.com/jmschrei/pomegranate), [pymc3](https://docs.pymc.io/)||
| Rule based classifier| [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)||
|Self-Supervised Learning|[lightly](https://github.com/lightly-ai/lightly), [vissl](https://github.com/facebookresearch/vissl), [solo-learn](https://github.com/vturrisi/solo-learn)|Implementations of SSL models|
||[self_supervised](https://github.com/KeremTurgutlu/self_supervised)|Self-supervised models in Fast.AI|
|Spiking Neural Network| [norse](https://github.com/norse/norse)||
|Support Vector Machines| [thundersvm](https://github.com/Xtra-Computing/thundersvm)|Run SVM on GPU|
|Survival Analysis|[lifelines](https://lifelines.readthedocs.io/en/latest/)||

### Frameworks  

|Category|Tool|Remarks|
|---|---|---|
|Addons| [mlxtend](https://github.com/rasbt/mlxtend)|Extra utilities not present in frameworks|
||[tensor-sensor](https://github.com/parrt/tensor-sensor)|Visualize tensors|
| Pytorch| [pytorch-summary](https://github.com/sksq96/pytorch-summary)|Keras-like summary|
||[torchtyping](https://github.com/patrick-kidger/torchtyping), [tsalib](https://github.com/ofnote/tsalib)|Type annotation for tensors|
||[einops](https://github.com/arogozhnikov/einops)|Einstein Notation|
||[kornia](https://kornia.readthedocs.io/en/latest/)|Computer Vision Methods|
||[nonechucks](https://github.com/msamogh/nonechucks)|Drop corrupt data automatically in DataLoader|
||[pytorch-optimizer](https://github.com/jettify/pytorch-optimizer)|Collection of optimizers|
||[pytorch-block-sparse](https://github.com/huggingface/pytorch_block_sparse)|Sparse matrix replacement for nn.Linear|
||[pytorch-forecasting](https://pytorch-forecasting.readthedocs.io/en/latest/)|Time series forecasting in PyTorch lightning|
||[pytorch-lightning](https://github.com/PyTorchLightning/pytorch-lightning)|Lightweight wrapper for PyTorch|
||[skorch](https://github.com/skorch-dev/skorch)|Wrap pytorch in scikit-learn compatible API|
||[torchcontrib](https://github.com/pytorch/contrib)|SOTA Bulding Blocks in PyTorch|
||[bitsandbytes](https://github.com/facebookresearch/bitsandbytes)|8-bit optimizers for PyTorch|
| Scikit-learn| [scikit-lego](https://scikit-lego.readthedocs.io/en/latest/index.html), [iterative-stratification](https://github.com/trent-b/iterative-stratification)||
||[iterstrat](https://github.com/trent-b/iterative-stratification)|Cross-validation for multi-label data|
||[scikit-multilearn](http://scikit.ml/)|Multi-label classification|
||[tscv](https://github.com/WenjieZ/TSCV)|Time-series cross-validation|
|Sparsification|[sparseml](https://github.com/neuralmagic/sparseml)|Apply sparsification to any framework|
|Tensorflow| [tensorflow-addons](https://github.com/tensorflow/addons)||
||[keras-radam](https://github.com/CyberZHG/keras-radam)|RADAM optimizer|
||[ktrain](https://pypi.org/project/ktrain/)|FastAI like interface for keras|
||[larq](https://github.com/larq/larq)|Binarized neural networks|
||[scikeras](https://github.com/adriangb/scikeras)|Scikit-learn Wrapper for Keras|
||[tavolo](https://github.com/eliorc/tavolo)|Kaggle Tricks as Keras Layers|
||[tensorflow-text](https://github.com/tensorflow/text)|Addons for NLP|
||[tensorflow-wheels](https://github.com/davidenunes/tensorflow-wheels)|Optimized wheels for Tensorflow|
||[tf-sha-rnn](https://github.com/titu1994/tf-sha-rnn)||

### Natural Language Processing  

|Category|Tool|Remarks|
|---|---|---|
|Libraries| [spacy](https://spacy.io/) , [nltk](https://github.com/nltk/nltk), [corenlp](https://stanfordnlp.github.io/CoreNLP/), [deeppavlov](http://docs.deeppavlov.ai/en/master/index.html), [kashgari](https://kashgari.bmio.net/), [transformers](https://github.com/huggingface/transformers), [ernie](https://github.com/brunneis/ernie), [stanza](https://stanfordnlp.github.io/stanza/), [nlp-architect](https://intellabs.github.io/nlp-architect/index.html), [spark-nlp](https://github.com/JohnSnowLabs/spark-nlp), [pytext](https://github.com/facebookresearch/pytext), [FARM](https://github.com/deepset-ai/FARM)||
|| [headliner](https://github.com/as-ideas/headliner), [txt2txt](https://github.com/bedapudi6788/txt2txt)|Sequence to sequence models|
||[Nvidia NeMo](https://github.com/NVIDIA/NeMo)|Toolkit for ASR, NLP and TTS|
||[nlu](https://nlu.johnsnowlabs.com/docs/en/examples)|1-line models for NLP|
||[pyconverse](https://github.com/AnjanaRita/converse)|Conversational Text Analysis|
||[booknlp](https://github.com/booknlp/booknlp)|NLP for Books|
|| [fast-bert](https://github.com/kaushaltrivedi/fast-bert), [simpletransformers](https://github.com/ThilinaRajapakse/simpletransformers)|Wrappers|
|| [finetune](https://github.com/IndicoDataSolutions/finetune)|Scikit-learn like API for transformers|
||[compromise](https://compromise.cool/)|Javascript NLP|
|CPU-optimizations|[turbo_transformers](https://github.com/Tencent/TurboTransformers), [onnx_transformers](https://github.com/patil-suraj/onnx_transformers)||
||[fastT5](https://github.com/Ki6an/fastT5)|Generate optimized T5 model|
|Preprocessing| [textacy](https://github.com/chartbeat-labs/textacy), [texthero](https://github.com/jbesomi/texthero), [textpipe](https://github.com/textpipe/textpipe), [nlpretext](https://github.com/artefactory/NLPretext)||
|| [JamSpell](https://github.com/bakwc/JamSpell), [pyhunspell](https://github.com/blatinier/pyhunspell), [pyspellchecker](https://github.com/barrust/pyspellchecker), [cython_hunspell](https://github.com/MSeal/cython_hunspell), [hunspell-dictionaries](https://github.com/wooorm/dictionaries), [autocorrect (can add more languages)](https://github.com/phatpiglet/autocorrect), [symspellpy](https://github.com/mammothb/symspellpy), [spello (train your own spelling correction)](https://github.com/hellohaptik/spello), [contextualSpellCheck](https://github.com/R1j1t/contextualSpellCheck), [neuspell](https://github.com/neuspell/neuspell), [nlprule](https://github.com/bminixhofer/nlprule), [spylls](https://github.com/zverok/spylls)|Spelling Correction|
||[gramformer](https://github.com/PrithivirajDamodaran/Gramformer)|Grammar Checker|
||[language-tool-python](https://github.com/jxmorris12/language_tool_python), [gingerit](https://github.com/Azd325/gingerit)|Grammatical Error Correction|
||[ekphrasis](https://github.com/cbaziotis/ekphrasis)|Pre-processing for social media texts|
||[editop](https://github.com/gchrupala/editop)|Compute edit-operations for text normalization|
| | [contractions](https://github.com/kootenpv/contractions), [pycontractions](https://pypi.org/project/pycontractions/)|Contraction Mapping|
| | [truecase](https://pypi.org/project/truecase/)|Fix casing|
|| [nnsplit](https://github.com/bminixhofer/nnsplit), [deepsegment](https://github.com/notAI-tech/deepsegment), [sentence-doctor](https://github.com/flexudy-pipe/sentence-doctor), [pysbd](https://github.com/nipunsadvilkar/pySBD), [sentence-splitter](https://github.com/mediacloud/sentence-splitter)|Sentence Segmentation|
||[wordninja](https://github.com/keredson/wordninja)|Probabilistic Word Segmentation|
||[punctuator2](https://github.com/ottokart/punctuator2)|Punctuation Restoration|
| | [stopwords-iso](https://github.com/stopwords-iso/stopwords-iso)|Stopwords for all languages|
| | [language-check](https://github.com/myint/language-check), [langdetect](https://github.com/Mimino666/langdetect), [polyglot](https://polyglot.readthedocs.io/en/latest/Detection.html), [pycld2](https://github.com/aboSamoor/pycld2), [cld2](https://github.com/CLD2Owners/cld2), [cld3](https://github.com/google/cld3), [langid](https://github.com/saffsd/langid.py), [lumi_language_id](https://github.com/LuminosoInsight/lumi_language_id)|Language Identification|
||[langcodes](https://github.com/LuminosoInsight/langcodes)|Get language from language code|
| | [neuralcoref](https://github.com/huggingface/neuralcoref)|Coreference Resolution|
| | [inflect](https://pypi.org/project/inflect/), [lemminflect](https://lemminflect.readthedocs.io/en/latest/), [pyinflect](https://github.com/bjascob/pyInflect)|Inflections|
| | [scrubadub](https://scrubadub.readthedocs.io/en/stable/#)|PID removal|
| | [ftfy](https://pypi.org/project/ftfy/), [clean-text](https://github.com/jfilter/clean-text),[text-unidecode](https://pypi.org/project/text-unidecode/)|Fix Unicode Issues|
| | [fastpunct](https://github.com/notAI-tech/fastPunct)|Punctuation Restoration|
||[pyphen](https://pyphen.org/)|Hypthenate words into syllables|
| | [pypostal](https://github.com/openvenues/pypostal), [mordecai](https://github.com/openeventdata/mordecai), [usaddress](https://github.com/datamade/usaddress), [libpostal](https://github.com/openvenues/libpostal)|Parse Street Addresses|
||[geopy](https://pypi.org/project/geopy/), [geocoder](https://github.com/DenisCarriere/geocoder), [nominatim](https://nominatim.org/release-docs/develop/), [pelias](https://github.com/pelias/pelias), [photon](https://github.com/komoot/photon), [lieu](https://github.com/openvenues/lieu)|Geocoding|
||[probablepeople](https://github.com/datamade/probablepeople), [python-nameparser](https://github.com/derek73/python-nameparser)|Parse person name|
||[python-phonenumbers](https://github.com/daviddrysdale/python-phonenumbers)|Parse phone numbers|
||[numerizer](https://github.com/jaidevd/numerizer), [word2number](https://pypi.org/project/word2number/)|Parse natural language number|
|| [dateparser](https://github.com/scrapinghub/dateparser)|Parse natural dates|
||[ctparse](https://github.com/comtravo/ctparse)|Parse natural language time|
||[daterangeparser](https://github.com/robintw/daterangeparser)|Parse date ranges in natural language|
|| [emoji](https://pypi.org/project/emoji/)|Handle emoji|
||[pyarabic](https://pyarabic.readthedocs.io/ar/latest/)|multilingual|
|Tokenization| [sentencepiece](https://github.com/google/sentencepiece), [youtokentome](https://github.com/VKCOM/YouTokenToMe), [subword-nmt](https://github.com/rsennrich/subword-nmt)||
||[sacremoses](https://github.com/alvations/sacremoses)|Rule-based|
| | [jieba](https://github.com/fxsjy/jieba), [pkuseg](https://github.com/lancopku/pkuseg-python)|Chinese Word Segmentation|
||[kytea](https://github.com/chezou/Mykytea-python)|Japanese word segmentation|
| Clustering| [kmodes](https://github.com/nicodv/kmodes), [star-clustering](https://github.com/josephius/star-clustering), [genieclust](https://genieclust.gagolewski.com/weave/basics.html)||
||[spherecluster](https://github.com/jasonlaska/spherecluster)|K-means with cosine distance|
||[sib](https://github.com/IBM/sib)|Sequential Information Bottleneck|
||[kneed](https://github.com/arvkevi/kneed)|Automatically find number of clusters from elbow curve|
||[OptimalCluster](https://github.com/shreyas-bk/OptimalCluster)|Automatically find optimal number of clusters|
||[gsdmm](https://github.com/rwalk/gsdmm)|Short-text clustering|
|Code Switching|[codeswitch](https://github.com/sagorbrur/codeswitch)||
|Constituency Parsing|[benepar](https://github.com/plandes/self-attentive-parser), [allennlp](https://demo.allennlp.org/constituency-parsing/), [chunk-english-fast](https://huggingface.co/flair/chunk-english-fast)||
|Compact Models|[mobilebert](https://huggingface.co/google/mobilebert-uncased), [distilbert](https://huggingface.co/distilbert-base-uncased), [tinybert](https://huggingface.co/XiaoqiJiao),[BERT-of-Theseus-MNLI](https://huggingface.co/canwenxu/BERT-of-Theseus-MNLI), [MiniML](https://huggingface.co/microsoft/MiniLM-L12-H384-uncased)||
|Cross-lingual Embeddings| [muse](https://github.com/facebookresearch/MUSE), [laserembeddings](https://pypi.org/project/laserembeddings/), [xlm](https://github.com/facebookresearch/XLM), [LaBSE](https://tfhub.dev/google/LaBSE/1)||
||[transvec](https://github.com/big-o/transvec), [vecmap](https://github.com/artetxem/vecmap)|Train mapping between monolingual embeddings|
||[MuRIL](https://tfhub.dev/google/MuRIL/1)|Embeddings for 17 indic languages with transliteration|
||[BPEmb](https://nlp.h-its.org/bpemb/)|Subword Embeddings in 275 Languages|
||[piecelearn](https://github.com/stephantul/piecelearn)|Train own sub-word embeddings|
| Dictionary| [vocabulary](https://vocabulary.readthedocs.io/en/latest/usage.html)||
| Domain-specific| [codebert](https://huggingface.co/codistai/codeBERT-small-v2#)|Code|
|| [clinicalbert-mimicnotes](https://huggingface.co/emilyalsentzer/Bio_ClinicalBERT), [clinicalbert-discharge-summary](https://huggingface.co/emilyalsentzer/Bio_Discharge_Summary_BERT)|Clinical Domain|
||[twitter-roberta-base](https://huggingface.co/cardiffnlp/twitter-roberta-base)|twitter|
|| [scispacy](https://github.com/allenai/scispacy)|bio-medical data|
||[blackstone](https://github.com/ICLRandD/Blackstone)|Legal text|
|Entity Linking|[dbpedia-spotlight](https://www.dbpedia-spotlight.org/api), [GENRE](https://github.com/facebookresearch/GENRE/blob/main/examples/transformers.md)||
|Entity Matching|[py_entitymatching](https://github.com/anhaidgroup/py_entitymatching), [deepmatcher](https://github.com/anhaidgroup/deepmatcher)||
|Embeddings| [InferSent](https://github.com/facebookresearch/InferSent), [embedding-as-service](https://github.com/amansrivastava17/embedding-as-service), [bert-as-service](https://github.com/hanxiao/bert-as-service), [sent2vec](https://github.com/NewKnowledge/nk-sent2vec), [sense2vec](https://github.com/explosion/sense2vec),[glove-python](https://github.com/maciejkula/glove-python), [fse](https://github.com/oborchers/Fast_Sentence_Embeddings)||
||[counterix](https://github.com/akb89/counterix)|Train custom Count-based DSM|
||[embeddix](https://github.com/akb89/embeddix)|Convert word vectors format|
||[wiki2vec](https://github.com/idio/wiki2vec)|Word2Vec trained on DBPedia Entities|
||[chars2vec](https://github.com/IntuitionEngineeringTeam/chars2vec)|Character-embeddings for handling typo and slangs|
||[rank_bm25](https://github.com/dorianbrown/rank_bm25), [BM25Transformer](https://github.com/arosh/BM25Transformer)|BM25|
|| [sentence-transformers](https://www.sbert.net/docs/pretrained_models.html), [DeCLUTR](https://huggingface.co/johngiorgi/declutr-base)|BERT sentence embeddings|
||[conceptnet-numberbatch](https://github.com/commonsense/conceptnet-numberbatch)|Word embeddings trained with common-sense knowledge graph|
||[word2vec-twitter](https://github.com/loretoparisi/word2vec-twitter)|Word2vec trained on twitter|
||[pymagnitude](https://github.com/plasticityai/magnitude)|Access word-embeddings programatically|
||[chakin](https://github.com/chakki-works/chakin)|Download pre-trained word vectors|
||[zeugma](https://github.com/nkthiebaut/zeugma)|Pretrained-word embeddings as scikit-learn transformers|
||[starspace](https://github.com/facebookresearch/StarSpace)|Learn embeddings for anything|
||[svd2vec](https://valentinp72.github.io/svd2vec/getting_started.html)|Learn embeddings from co-occurrence|
||[all-but-the-top](https://gist.github.com/lgalke/febaaa1313d9c11f3bc8240defed8390)|Post-processing for word vectors|
||[entity-embed](https://github.com/vintasoftware/entity-embed)|Train custom embeddings for named entities|
|Emotion Classification|[goemotion-pytorch](https://github.com/monologg/GoEmotions-pytorch), [text2emotion](https://github.com/aman2656/text2emotion-library)||
||[emosent-py](https://pypi.org/project/emosent-py/)|Sentiment scores for Emojis|
|Feature Generation|[homer](https://github.com/wyounas/homer), [textstat](https://github.com/shivam5992/textstat)|Readability scores|
||[LexicalRichness](https://github.com/LSYS/LexicalRichness)|Lexical Richness Measure|
|Fill mask| [fitbert](https://github.com/Qordobacode/fitbert)||
|Finite State Transducer|[OpenFST](http://www.openfst.org/twiki/bin/view/FST/WebHome)||
|Gibberish Detection|[nostril](https://github.com/casics/nostril), [gibberish-detector](https://github.com/amitness/Gibberish-Detector)||
|Grammar Induction|[gitta](https://github.com/twinters/gitta), [grasp](https://github.com/plkumjorn/GrASP)|Generate CFG from sentences|
|Information Extraction|[claucy](https://github.com/mmxgn/spacy-clausie/tree/dev-clausie-reimplementation)||
||[GiveMe5W1H](https://github.com/fhamborg/Giveme5W1H)|Extract 5-why 1-how phrases from news|
||[spikex](https://github.com/erre-quadro/spikex)|Spacy pipeline for knowledge extraction|
|Keyword extraction| [rake](https://github.com/zelandiya/RAKE-tutorial), [multi-rake](https://github.com/vgrabovets/multi_rake), [pke](https://github.com/boudinfl/pke), [phrasemachine](https://github.com/slanglab/phrasemachine), [keybert](https://github.com/MaartenGr/KeyBERT/), [word2phrase](https://github.com/travisbrady/word2phrase)||
|| [pyate](https://github.com/kevinlu1248/pyate) |Automated Term Extraction|
|Knowledge| [conceptnet-lite](https://github.com/ldtoolkit/conceptnet-lite)||
| | [stanford-openie](https://github.com/philipperemy/Stanford-OpenIE-Python)|Knowledge Graphs|
||[verbnet-parser](https://github.com/jgung/verbnet-parser)|VerbNet parser|
| Knowledge Distillation| [textbrewer](https://github.com/airaria/TextBrewer), [aquvitae](https://github.com/aquvitae/aquvitae)||
| Language Model Scoring| [lm-scorer](https://github.com/simonepri/lm-scorer), [bertscore](https://github.com/Tiiiger/bert_score), [kenlm](https://github.com/kpu/kenlm), [spacy_kenlm](https://github.com/tokestermw/spacy_kenlm), [mlm-scoring](https://github.com/awslabs/mlm-scoring)||
|Lexical Simplification|[easee](https://github.com/feralvam/easse/)|Evaluation metric|
| Metrics| [seqeval](https://github.com/chakki-works/seqeval)|NER, POS tagging|
||[ranking-metrics](https://gist.github.com/bwhite/3726239), [cute_ranking](https://github.com/ncoop57/cute_ranking)|Metrics for Information Retrieval|
||[mir_eval](https://github.com/craffel/mir_eval)|Music Information Retrieval Metrics|
|Morphology|[unimorph](https://pypi.org/project/unimorph/)|Morphology data for many languages|
|Multilingual support| [polyglot](https://polyglot.readthedocs.io/en/latest/index.html), [trankit](https://github.com/nlp-uoregon/trankit)||
|| [inltk](https://github.com/goru001/inltk), [indic_nlp](https://github.com/anoopkunchukuttan/indic_nlp_library)|Indic Languages|
||[cltk](https://github.com/cltk/cltk)|NLP for latin and classic languages|
||[langrank](https://github.com/neulab/langrank)|Auto-select optimal transfer language|
| Named Entity Recognition(NER) | [spaCy](https://spacy.io/) , [Stanford NER](https://nlp.stanford.edu/software/CRF-NER.shtml), [sklearn-crfsuite](https://sklearn-crfsuite.readthedocs.io/en/latest/index.html)||
||[med7](https://github.com/kormilitzin/med7)|Spacy NER for medical records|
| Nearest neighbor| [faiss](https://github.com/facebookresearch/faiss), [sparse_dot_topn](https://github.com/ing-bank/sparse_dot_topn), [n2](https://github.com/kakao/n2/), [autofaiss](https://github.com/criteo/autofaiss)||
|NLU| [snips-nlu](https://github.com/snipsco/snips-nlu)||
||[ParlAI](https://github.com/facebookresearch/ParlAI)|Dialogue System|
|Paraphrasing|[parrot](https://github.com/PrithivirajDamodaran/Parrot)||
||[pegasus](https://colab.research.google.com/drive/1RWvGuHKnPur7fCL0DObMeZXQVHem6aEV?usp=sharing)|Question Paraphrasing|
||[paraphrase_diversity_ranker](https://huggingface.co/salesken/paraphrase_diversity_ranker)|Rank paraphrases of sentence|
||[sentaugment](https://github.com/facebookresearch/SentAugment)|Paraphrase mining|
|Phonetics|[epitran](https://github.com/dmort27/epitran)|Transliterate text into IPA|
||[allosaurus](https://github.com/xinjli/allosaurus)|Recognize phone for 2000 languages|
|Phonology|[panphon](https://github.com/dmort27/panphon)|Generate phonological feature representations|
||[phoible](https://phoible.org/)|Database of segment inventories for 2186 languages|
|Probabilistic parsing|[parserator](https://github.com/datamade/parserator)|Create domain-specific parser for address, name etc.|
|Profanity detection| [profanity-check](https://github.com/vzhou842/profanity-check)||
|Pronunciation|[pronouncing](https://pronouncing.readthedocs.io/en/latest/)||
|Question Answering|[haystack](https://haystack.deepset.ai)|Build end-to-end QA system|
||[mcQA](https://github.com/mcQA-suite/mcQA)|Multiple Choice Question Answering|
||[TAPAS](https://huggingface.co/google/tapas-base-finetuned-wtq)|Table Question Answering|
|Question Generation|[question-generation](https://github.com/patil-suraj/question_generation), [questiongen.ai](https://github.com/ramsrigouthamg/Questgen.ai)|Question Generation Pipeline for Transformers|
|Ranking|[transformer-rankers](https://github.com/Guzpenha/transformer_rankers)||
|Relation Extraction|[OpenNRE](https://github.com/thunlp/OpenNRE)||
|Search|[elasticsearch-dsl](https://elasticsearch-dsl.readthedocs.io/en/latest/)|Wrapper for elastic search|
||[jina](https://github.com/jina-ai/jina)|production-level neural semantic search|
||[mellisearch-python](https://github.com/meilisearch/meilisearch-python)||
|Semantic parsing| [quepy](https://github.com/machinalis/quepy)||
|Sentiment| [vaderSentiment](https://github.com/cjhutto/vaderSentiment), [afinn](https://github.com/fnielsen/afinn)|Rule based|
| | [absa](https://github.com/ScalaConsultants/Aspect-Based-Sentiment-Analysis)|Aspect Based Sentiment Analysis|
||[xlm-t](https://github.com/cardiffnlp/xlm-t)|Models|
|Spacy Extensions|[spacy-pattern-builder](https://github.com/cyclecycle/spacy-pattern-builder)|Generate dependency matcher patterns automatically|
||[spacy_grammar](https://github.com/tokestermw/spacy_grammar)|Rule-based grammar error detection|
||[role-pattern-builder](https://github.com/cyclecycle/role-pattern-nlp)|Pattern based SRL|
||[textpipeliner](https://github.com/krzysiekfonal/textpipeliner)|Extract RDF triples|
||[tenseflow](https://github.com/bendichter/tenseflow)|Convert tense of sentence|
||[camphr](https://github.com/PKSHATechnology-Research/camphr/)|Wrapper to transformers, elmo, udify|
||[spleno](https://github.com/p-sodmann/SpLeNo)|Domain-specific lemmatization|
||[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)|Use UDPipe from Spacy|
||[spacymoji](https://pypi.org/project/spacymoji/)|Add emoji metadata to spacy docs|
| String match|[phrase-seeker](https://github.com/kirillgashkov/phrase-seeker), [textsearch](https://github.com/kootenpv/textsearch)||
||[jellyfish](https://pypi.org/project/jellyfish/), [fuzzy](https://github.com/yougov/fuzzy), [doublemetaphone](https://github.com/dedupeio/doublemetaphone)|Perform string and phonetic comparison|
||[clavier](https://github.com/MaxHalford/clavier)|Edit distance based on keyboard layout|
||[flashtext](https://github.com/vi3k6i5/flashtext)|Super-fast extract and replace keywords|
||[pythonverbalexpressions](https://github.com/VerbalExpressions/PythonVerbalExpressions)|Verbally describe regex|
||[commonregex](https://github.com/madisonmay/CommonRegex)|Ready-made regex for email/phone etc.|
| | [textdistance](https://github.com/life4/textdistance), [editdistance](https://github.com/aflc/editdistance), [word-mover-distance](https://radimrehurek.com/gensim/models/keyedvectors.html#what-can-i-do-with-word-vectors), [edlib](https://pypi.org/project/edlib/)|Text distances|
||[wmd-relax](https://github.com/src-d/wmd-relax)|Word mover distance for spacy|
|  | [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy), [spaczz](https://github.com/gandersen101/spaczz), [PolyFuzz](https://github.com/MaartenGr/PolyFuzz), [rapidfuzz](https://github.com/maxbachmann/rapidfuzz), [fuzzymatcher](https://github.com/RobinL/fuzzymatcher)|Fuzzy Search|
||[deduplipy](https://github.com/fritshermans/deduplipy), [dedupe](https://github.com/dedupeio/dedupe)|Active-Learning based fuzzy matching|
||[recordlinkage](https://recordlinkage.readthedocs.io/en/stable/)|Record Linkage|
| Summarization| [textrank](https://github.com/summanlp/textrank), [pytldr](https://github.com/jaijuneja/PyTLDR), [bert-extractive-summarizer](https://github.com/dmmiller612/bert-extractive-summarizer), [sumy](https://github.com/miso-belica/sumy), [fast-pagerank](https://github.com/asajadi/fast-pagerank), [sumeval](https://github.com/chakki-works/sumeval)||
||[doc2query](https://github.com/castorini/docTTTTTquery)|Summarize document with queries|
||[summarizers](https://github.com/hyunwoongko/summarizers)|Controllable summarization|
||[insight_extractor](https://github.com/NoahFinberg/insight_extractor)|Extract insightful sentences from docs|
| Text Extraction| [textract (Image, Audio, PDF)](https://textract.readthedocs.io/en/stable/)||
| Text Generation| [gp2client](https://github.com/rish-16/gpt2client), [textgenrnn](https://github.com/minimaxir/textgenrnn), [gpt-2-simple](https://github.com/minimaxir/gpt-2-simple), [aitextgen](https://github.com/minimaxir/aitextgen)|GPT-2|
| |[markovify](https://github.com/jsvine/markovify)|Markov chains|
||[accelerated-text](https://github.com/tokenmill/accelerated-text)|Template-based generation|
| |[keytotext](https://github.com/gagan3012/keytotext)|Keyword to Sentence Generation|
|Transliteration|[wiktra](https://github.com/kbatsuren/wiktra)||
| Machine Translation| [MarianMT](https://huggingface.co/transformers/model_doc/marian.html), [Opus-MT](https://github.com/Helsinki-NLP/Opus-MT), [joeynmt](https://joeynmt.readthedocs.io/en/latest/tutorial.html), [OpenNMT](https://github.com/OpenNMT/OpenNMT-py), [EasyNMT](https://github.com/UKPLab/EasyNMT), [argos-translate](https://github.com/argosopentech/argos-translate), [dl-translate](https://github.com/xhlulu/dl-translate)||
| | [googletrans](https://pypi.org/project/googletrans/), [word2word](https://github.com/Kyubyong/word2word), [translate-python](https://github.com/terryyin/translate-python), [deep_translator](https://github.com/nidhaloff/deep_translator)|Translation libraries|
||[mosesdecoder](https://github.com/moses-smt/mosesdecoder)|Statistical MT|
||[apertium](https://github.com/apertium/apertium)|RBMT|
||[translators](https://pypi.org/project/translators)|Free calls to multiple translation APIs|
||[giza++](https://github.com/moses-smt/giza-pp), [fastalign](https://github.com/clab/fast_align), [simalign](https://github.com/cisnlp/simalign), [eflomal](https://github.com/robertostling/eflomal), [awesome-align](https://github.com/neulab/awesome-align)|Word Alignment|
|Thesaurus|[python-datamuse](https://github.com/gmarmstrong/python-datamuse)||
|Toxicity Detection|[detoxify](https://github.com/unitaryai/detoxify)||
|Topic Modeling|[gensim](https://github.com/RaRe-Technologies/gensim), [guidedlda](https://github.com/vi3k6i5/guidedlda), [enstop](https://github.com/lmcinnes/enstop), [top2vec](https://github.com/ddangelov/Top2Vec), [contextualized-topic-models](https://github.com/MilaNLProc/contextualized-topic-models), [corex_topic](https://github.com/gregversteeg/corex_topic), [lda2vec](https://github.com/cemoody/lda2vec), [bertopic](https://github.com/MaartenGr/BERTopic), [tomotopy](https://bab2min.github.io/tomotopy), [ToModAPI](https://github.com/D2KLab/ToModAPI)||
||[zeroshot_topics](https://github.com/AnjanaRita/zeroshot_topics)|Zero-shot topic modeling|
||[octis](https://github.com/mind-lab/octis)|Evaluate topic models|
|Typology|[lang2vec](https://github.com/antonisa/lang2vec)|Compare typological features of languages|
| Visualization| [stylecloud](https://github.com/minimaxir/stylecloud)|Word Clouds|
| | [scattertext](https://github.com/JasonKessler/scattertext)|Compare word usage across segments|
||[picture-text](https://github.com/md-experiments/picture_text)|Interactive tree-maps for hierarchical clustering|
||[ipymarkup](https://github.com/natasha/ipymarkup)|Visualize NER and syntax|
|Verb Conjugation|[nodebox_linguistics_extended](https://github.com/amitness/nodebox_linguistics_extended), [mlconj3](https://mlconjug3.readthedocs.io/en/latest/)||
|Word Sense Disambiguation|[pywsd](https://github.com/alvations/pywsd), [ewiser](https://github.com/SapienzaNLP/ewiser), [supwsd](https://supwsd.net/supwsd/)||
||[frame-english-fast](https://huggingface.co/flair/frame-english-fast)|Verb Disambiguation|
|Zero Shot Learning|[setfit](https://github.com/pmbaumgartner/setfit)||

### Computer Vision  

|Category|Tool|Remarks|
|---|---|---|
| Face recognition| [face_recognition](https://github.com/ageitgey/face_recognition), [mtcnn](https://github.com/ipazc/mtcnn), [insightface](https://github.com/deepinsight/insightface), [face-detection](https://github.com/hukkelas/DSFD-Pytorch-Inference)||
||[face-alignment](https://github.com/1adrianb/face-alignment)|Find facial landmarks|
||[Facial-Expression-Recognition.Pytorch](https://github.com/WuJie1010/Facial-Expression-Recognition.Pytorch)|Face Emotion|
| Face swapping| [faceit](https://github.com/goberoi/faceit), [faceit-live](https://github.com/alew3/faceit_live), [avatarify](https://github.com/alievk/avatarify)||
| GANS| [mimicry](https://mimicry.readthedocs.io/en/latest/index.html), [imaginaire](https://github.com/NVlabs/imaginaire), [pytorch-lightning-gans](https://github.com/nocotan/pytorch-lightning-gans)||
|High-level libraries|[terran](https://github.com/pento-group/terran)|Face detection, recognition, pose estimation|
|Image Hashing| [ImageHash](https://pypi.org/project/ImageHash/), [imagededup](https://github.com/idealo/imagededup)||
|Image Inpainting|[GAN Image Inpainting](https://github.com/renatoviolin/GAN-image-inpainting)||
|Image Processing| [scikit-image](https://github.com/scikit-image/scikit-image), [imutils](https://github.com/jrosebr1/imutils), [opencv-wrapper](https://github.com/anbergem/opencv_wrapper), [opencv-python](https://pypi.org/project/opencv-python/)||
||[torchio](https://github.com/fepegar/torchio)|Medical Images|
| Object detection| [luminoth](https://github.com/tryolabs/luminoth), [detectron2](https://github.com/facebookresearch/detectron2), [mmdetection](https://github.com/open-mmlab/mmdetection), [icevision](https://airctic.com/)||
| OCR| [keras-ocr](https://github.com/faustomorales/keras-ocr), [pytesseract](https://github.com/madmaze/pytesseract), [keras-craft](https://github.com/notAI-tech/keras-craft), [ocropy](https://github.com/ocropus/ocropy), [doc2text](https://github.com/jlsutherland/doc2text)||
||[easyocr](https://github.com/JaidedAI/EasyOCR), [kraken](https://github.com/mittagessen/kraken), [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)|Multilingual OCR|
||[layout-parser](https://github.com/Layout-Parser/layout-parser), [pdftabextract](https://github.com/WZBSocialScienceCenter/pdftabextract)|OCR tables from document|
|Segmentation| [segmentation_models](https://github.com/qubvel/segmentation_models)|Keras|
||[segmentation_models.pytorch](https://github.com/qubvel/segmentation_models.pytorch)|Segmentation models in PyTorch|
|Semantic Search| [scoper](https://github.com/RameshAditya/scoper)|Video|
|Video summarization| [videodigest](https://github.com/agermanidis/videodigest)||

### Speech  

|Category|Tool|Remarks|
|---|---|---|
|Diarization| [resemblyzer](https://github.com/resemble-ai/Resemblyzer)||
|Feature Engineering|[python_speech_features](https://github.com/jameslyons/python_speech_features)|Convert raw audio to features|
|Libraries|[speechbrain](https://github.com/speechbrain/speechbrain), [pyannotate](http://pyannote.github.io/), [librosa](https://librosa.github.io/librosa/index.html), [espnet](https://github.com/espnet/espnet)||
||[silero-models](https://github.com/snakers4/silero-models#text-enhancement)|Pre-trained models|
|Source Separation| [spleeter](https://github.com/deezer/spleeter), [nussl](https://github.com/nussl/nussl), [open-unmix-pytorch](https://github.com/sigsep/open-unmix-pytorch), [asteroid](https://github.com/mpariente/asteroid)||
|Speech Recognition|[kaldi](https://github.com/kaldi-asr/kaldi), [speech_recognition](https://github.com/Uberi/speech_recognition), [delta](https://github.com/Delta-ML/delta), [pocketsphinx-python](https://github.com/cmusphinx/pocketsphinx-python), [deepspeech](https://github.com/mozilla/DeepSpeech), [stt](https://github.com/coqui-ai/stt), [vosk](https://alphacephei.com/vosk/)||
|Speech Synthesis|[festvox](http://festvox.org), [cmuflite](http://www.festvox.org/flite/), [tts](https://github.com/coqui-ai/tts)||

### Recommendation System  

|Category|Tool|Remarks|
|---|---|---|
|Apriori algorithm| [apyori](https://github.com/ymoch/apyori)||
|Collaborative Filtering| [implicit](https://github.com/benfred/implicit)||
|Libraries| [xlearn](https://github.com/aksnzhy/xlearn), [DeepCTR](https://github.com/shenweichen/DeepCTR), [RankFM](https://github.com/etlundquist/rankfm)| Factorization machines (FM), and field-aware factorization machines (FFM)|
||[libmf-python](https://github.com/PorkShoulderHolder/python-libmf)|Matrix Factorization|
||[lightfm](https://github.com/lyst/lightfm), [spotlight](https://github.com/maciejkula/spotlight)|Popular Recsys algos|
||[tensorflow_recommenders](https://www.tensorflow.org/recommenders)|Recommendation System in Tensorflow|
|Metrics|[rs_metrics](https://darel13712.github.io/rs_metrics/metrics/)||
|Recommendation System in Pytorch| [CaseRecommender](https://github.com/caserec/CaseRecommender)||
|Scikit-learn like API| [surprise](https://github.com/NicolasHug/Surprise)||

### Timeseries  

|Category|Tool|Remarks|
|---|---|---|
|Libraries| [prophet](https://facebook.github.io/prophet/docs/quick_start.html#python-api), [tslearn](https://github.com/tslearn-team/tslearn), [pyts](https://github.com/johannfaouzi/pyts), [seglearn](https://github.com/dmbee/seglearn), [cesium](https://github.com/cesium-ml/cesium), [stumpy](https://github.com/TDAmeritrade/stumpy), [darts](https://github.com/unit8co/darts), [gluon-ts](https://github.com/awslabs/gluon-ts), [stldecompose](https://github.com/jrmontag/STLDecompose)||
|| [sktime](https://github.com/alan-turing-institute/sktime)|Scikit-learn like API|
||[atspy](https://github.com/firmai/atspy)|Automated time-series models|
|Anomaly Detection|[orion](https://github.com/signals-dev/Orion), [luminaire](https://github.com/zillow/luminaire)|Unsupervised time-series anomaly detection|
|ARIMA models| [pmdarima](https://github.com/alkaline-ml/pmdarima)||

### Hyperparameter Optimization  

|Category|Tool|Remarks|
|---|---|---|
|General| [hyperopt](https://github.com/hyperopt/hyperopt), [optuna](https://optuna.org/), [evol](https://github.com/godatadriven/evol), [talos](https://github.com/autonomio/talos)||
|Keras| [keras-tuner](https://github.com/keras-team/keras-tuner)||
|Parameter optimization| [ParameterImportance](https://github.com/automl/ParameterImportance)||
|Scikit-learn|[hyperopt-sklearn](https://github.com/hyperopt/hyperopt-sklearn), [scikit-optimize](https://scikit-optimize.github.io/stable/)|Bayesian Optimization|
||[sklearn-deap](https://github.com/rsteca/sklearn-deap), [sklearn-generic-opt](https://sklearn-genetic-opt.readthedocs.io/en/stable/)|Evolutionary algorithm|

## Phase: Validation
### Experiment Monitoring  

|Category|Tool|Remarks|
|---|---|---|
|Experiment tracking|[tensorboard](https://www.tensorflow.org/tensorboard), [mlflow](https://mlflow.org/docs/latest/index.html#)||
|| [lrcurve](https://github.com/AndreasMadsen/python-lrcurve), [livelossplot](https://github.com/stared/livelossplot)|Plot realtime learning curve in Keras|
|GPU Usage| [gpumonitor](https://github.com/sicara/gpumonitor), [nvtop](https://github.com/Syllo/nvtop)||
|| [jupyterlab-nvdashboard](https://github.com/rapidsai/jupyterlab-nvdashboard)|See GPU Usage in jupyterlab|
|MLOps|[clearml](https://www.clear.ml), [wandb](https://wandb.ai/), [neptune.ai](https://neptune.ai), [replicate.ai](https://replicate.ai/)||
|Notification| [knockknock](https://github.com/huggingface/knockknock)|Get notified by slack/email|
|| [jupyter-notify](https://github.com/ShopRunner/jupyter-notify)|Notify when task is completed in jupyter|
||[apprise](https://github.com/caronc/apprise)|Notify to any platform|
||[pynotifier](https://github.com/YuriyLisovskiy/pynotifier)|Generate desktop notification|

### Interpretability  

|Category|Tool|Remarks|
|---|---|---|
|Adversarial Attack| [cleverhans](https://github.com/tensorflow/cleverhans)|General|
|| [foolbox](https://github.com/bethgelab/foolbox)|Image|
||[triggers](https://www.ericswallace.com/triggers)|NLP|
| Interpret models| [eli5](https://eli5.readthedocs.io/en/latest/), [lime](https://github.com/marcotcr/lime), [shap](https://github.com/slundberg/shap), [alibi](https://github.com/SeldonIO/alibi), [tf-explain](https://github.com/sicara/tf-explain), [treeinterpreter](https://github.com/andosa/treeinterpreter), [pybreakdown](https://github.com/MI2DataLab/pyBreakDown), [xai](https://github.com/EthicalML/xai), [lofo-importance](https://github.com/aerdem4/lofo-importance), [interpretML](https://github.com/interpretml/interpret), [shapash](https://github.com/MAIF/shapash)||
|| [exbert](http://exbert.net/exBERT.html?sentence=I%20liked%20the%20music&layer=0&heads=..0,1,2,3,4,5,6,7,8,9,10,11&threshold=0.7&tokenInd=null&tokenSide=null&maskInds=..9&metaMatch=pos&metaMax=pos&displayInspector=null&offsetIdxs=..-1,0,1&hideClsSep=true)|Interpret BERT|
||[bertviz](https://github.com/jessevig/bertviz)|Explore self-attention in BERT|
|NLP| [word2viz](https://lamyiowce.github.io/word2viz/), [whatlies](https://github.com/RasaHQ/whatlies)|word-vectors|
||[Language Interpretability Tool](https://pair-code.github.io/lit/setup/#custom), [transformers-interpret](https://github.com/cdpierse/transformers-interpret)||

### Visualization  

|Category|Tool|Remarks|
|---|---|---|
|Diagrams|[dl-visuals](https://github.com/dvgodoy/dl-visuals), [ml-visuals](https://github.com/dair-ai/ml-visuals)||
||[chalk](https://github.com/danoneata/chalk)|Declarative drawing API|
| Libraries|[matplotlib](https://matplotlib.org/), [seaborn](https://seaborn.pydata.org/), [pygal](http://www.pygal.org/en/latest/index.html), [plotly](https://github.com/plotly/plotly.py), [plotnine](https://github.com/has2k1/plotnine)||
|| [yellowbrick](https://www.scikit-yb.org/en/latest/index.html), [scikit-plot](https://scikit-plot.readthedocs.io/en/stable/metrics.html)|Visualization for scikit-learn|
|| [pyldavis](https://pyldavis.readthedocs.io/en/latest/)|Visualize topics models|
||[dtreeviz](https://github.com/parrt/dtreeviz)|Visualize decision tree|
||[txtmarker](https://github.com/neuml/txtmarker)|Highlight text in PDF|
||[metriculous](https://github.com/metriculous-ml/metriculous)|Visualize model performance|
|Animated charts| [bar_chart_race](https://github.com/dexplo/bar_chart_race)|Bar chart race animation|
||[pandas_alive](https://github.com/JackMcKew/pandas_alive)|Animated charts in pandas|
|High dimensional visualization| [umap](https://github.com/lmcinnes/umap)||
||[ivis](https://github.com/beringresearch/ivis)|Ivis Algorithm|
| Interactive charts| [bokeh](https://github.com/bokeh/bokeh)||
|| [flourish-studio](https://flourish.studio/)|Create interactive charts online|
|| [mpld3](http://mpld3.github.io/index.html)|Matplotlib to D3 Converter|
|Model Visualization|[netron](https://github.com/lutzroeder/netron), [nn-svg](http://alexlenail.me/NN-SVG/LeNet.html)|Architecture|
|| [keract](https://github.com/philipperemy/keract)|Activation maps for keras|
|| [keras-vis](https://github.com/raghakot/keras-vis)|Visualize keras models|
||[PlotNeuralNet](https://github.com/HarisIqbal88/PlotNeuralNet)|Latex code for drawing neural network|
||[loss-landscape-anim](https://github.com/logancyang/loss-landscape-anim)|Generate loss landscape of optimizer|
|Styling| [open-color](https://yeun.github.io/open-color/)|Color Schemes|
||[mplcyberpunk](https://github.com/dhaitz/mplcyberpunk)|Cyberpunk style for matplotlib|
|| [chart.xkcd](https://timqian.com/chart.xkcd/)|XKCD like charts|
||[adjustText](https://github.com/Phlya/adjustText/wiki)|Prevent overlap when plotting point text label|
|Generate graphs using markdown| [mermaid](https://mermaid-js.github.io/mermaid/#/README)||
|Tree-map chart|[squarify](https://github.com/laserson/squarify)||
|3D charts|[babyplots](https://bp.bleb.li/documentation/python)||

## Phase: Production
### Model Export

|Category|Tool|Remarks|
|---|---|---|
|Benchmarking| [torchprof](https://github.com/awwong1/torchprof)|Profile pytorch layers|
||[scalene](https://github.com/emeryberger/scalene), [pyinstrument](https://github.com/joerick/pyinstrument)|Profile python code|
||[k6](https://k6.io/)|Load test API|
||[ai-benchmark](https://pypi.org/project/ai-benchmark/)|Bechmark VM on 19 different models|
|Cloud Storage|[Zenodo](https://zenodo.org/), [Github Releases](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository), [OneDrive](https://www.onedrive.com/), [Google Drive](https://drive.google.com/), [Dropbox](https://dropbox.com/), [S3](https://aws.amazon.com/s3/), [mega](https://mega.nz/), [DAGsHub](https://dagshub.com/), [huggingface-hub](https://github.com/huggingface/huggingface_hub)||
|Data Pipeline|[pypeln](https://github.com/cgarciae/pypeln)||
|Dependencies|[pip-chill](https://pypi.org/project/pip-chill/)|pip freeze without dependencies|
||[pipreqs](https://pypi.org/project/pipreqs/)|Generate requirements.txt based on imports|
||[conda-pack](https://conda.github.io/conda-pack/)|Export conda for offline use|
|Distributed training|[horovod](https://github.com/horovod/horovod)||
|Model Store|[modelstore](https://modelstore.readthedocs.io/en/latest/)||
|Optimization|[nn_pruning](https://github.com/huggingface/nn_pruning)|Movement Pruning|
||[aimet](https://github.com/quic/aimet), [tensorflow-lite](https://www.tensorflow.org/lite)|Quantization|
|Serialization| [sklearn-porter](https://github.com/nok/sklearn-porter), [m2cgen](https://github.com/BayesWitnesses/m2cgen)|Transpile sklearn model to C, Java, JavaScript and others|
||[onnxmltools](https://github.com/onnx/onnxmltools)|Classic ML models to onnx format|
||[hummingbird](https://github.com/microsoft/hummingbird)|Convert ML models to PyTorch|
||[cloudpickle](https://github.com/cloudpipe/cloudpickle), [jsonpickle](https://github.com/jsonpickle/jsonpickle)|Pickle extensions|


### Inference  

|Category|Tool|Remarks|
|---|---|---|
|Authentication| [pyjwt (JWT)](https://github.com/jpadilla/pyjwt), [auth0](https://auth0.com/), [okta](https://www.okta.com/), [cognito](https://aws.amazon.com/cognito/)||
|Batch Jobs|[airflow](https://airflow.apache.org/), [luigi](https://github.com/spotify/luigi), [dagster](https://dagster.io/), [oozie](https://oozie.apache.org/), [prefect](https://docs.prefect.io/core/), [kubernetes-cron-jobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/), [argo](https://github.com/argoproj)||
|| [rq](https://github.com/rq/rq), [schedule](https://github.com/dbader/schedule), [huey](https://github.com/coleifer/huey)|Task Queue|
||[mlq](https://github.com/tomgrek/mlq)|Queue ML Tasks in Flask|
|Caching| [cachetools](https://pypi.org/project/cachetools/), [cachew (cache to local sqlite)](https://github.com/karlicoss/cachew)||
||[redis-py](https://github.com/andymccurdy/redis-py), [pymemcache](https://github.com/pinterest/pymemcache)||
|Cloud Monitoring|[datadog](https://www.datadoghq.com)||
|Configuration Management| [config](https://pypi.org/project/config/), [python-decouple](https://github.com/henriquebastos/python-decouple), [python-dotenv](https://pypi.org/project/python-dotenv/), [dynaconf](https://dynaconf.readthedocs.io/en/docs_223/)||
|CORS| [flask-cors](https://flask-cors.readthedocs.io/en/latest/)|CORS in Flask|
|Database| [flask-sqlalchemy](https://github.com/pallets/flask-sqlalchemy), [tinydb](https://github.com/msiemens/tinydb), [flask-pymongo](https://flask-pymongo.readthedocs.io/en/latest/), [odmantic](https://github.com/art049/odmantic)||
||[tortoise-orm](https://github.com/tortoise/tortoise-orm)|Asyncio ORM similar to Django|
|Monitoring|[whylogs](https://github.com/whylabs/whylogs-python)|Data Logging|
||[grafana](https://grafana.com/), [prometheus](https://prometheus.io/)|Metric|
||[sentry](https://sentry.io/), [honeybadger](https://www.honeybadger.io/)|Error Reporting|
|Data Validation|[schema](https://github.com/keleshev/schema), [jsonschema](https://pypi.org/project/jsonschema/), [cerebrus](https://github.com/pyeve/cerberus), [pydantic](https://pydantic-docs.helpmanual.io/), [marshmallow](https://marshmallow.readthedocs.io/en/stable/), [validators](https://validators.readthedocs.io/en/latest/#basic-validators)||
|Dashboard|[streamlit](https://github.com/streamlit/streamlit)|Generate frontend with python|
||[gradio](https://github.com/gradio-app/gradio)|Fast UI generation for prototyping|
||[dash](https://plotly.com/dash/)|React Dashboard using Python|
||[voila](https://github.com/voila-dashboards/voila)|Convert Jupyter notebooks into dashboard|
||[streamlit-drawable-canvas](https://github.com/andfanilo/streamlit-drawable-canvas)|Drawable Canvas for Streamlit|
||[streamlit-terran-timeline](https://github.com/pento-group/streamlit-terran-timeline)|Show timeline of faces in videos|
||[streamlit components](https://www.streamlit.io/components)|Collection of streamlit components|
|Deployment Checklist|[ml-checklist](https://twolodzko.github.io/ml-checklist)||
|Documentation|[mkdocs](https://www.mkdocs.org/), [pdoc](https://pdoc3.github.io/pdoc/)||
|Drift Detection|[alibi-detect](https://github.com/SeldonIO/alibi-detect), [torchdrift](https://torchdrift.org/), [boxkite](https://github.com/boxkite-ml/boxkite)|Outlier and drift detection|
|Edge Deployment|[Tensorfow Lite](https://www.tensorflow.org/lite/models), [coreml](https://developer.apple.com/documentation/coreml), [Tensorflow.js](https://www.tensorflow.org/js))||
|Logging| [loguru](https://github.com/Delgan/loguru)||
|Model Serving|[cortex](https://github.com/cortexlabs/cortex), [torchserve](https://pytorch.org/serve/), [ray-serve](https://docs.ray.io/en/master/serve/), [bentoml](https://github.com/bentoml/BentoML), [seldon-core](https://github.com/SeldonIO/seldon-core/)|Serving Framework|
||[flask](https://flask.palletsprojects.com/en/1.1.x/), [fastapi](https://fastapi.tiangolo.com/)|API Frameworks|
|Processing|[pyspark](https://spark.apache.org/docs/latest/api/python/index.html), [hive](http://hive.apache.org/)||
|Serverless|[magnum](https://github.com/jordaneremieff/mangum)|Use FastAPI in Lambda|
|Server-Side Events|[sse-starlette](https://github.com/sysid/sse-starlette)|Server-side events for FastAPI|
|Stream Processing|[flink](https://flink.apache.org/), [kafka](https://kafka.apache.org/), [apache beam](https://beam.apache.org/)||
|Testing| [schemathesis](https://github.com/kiwicom/schemathesis/)|Automatic test generation from Swagger|
||[pytest-benchmark](https://pytest-benchmark.readthedocs.io/en/latest/)|Profile time in pytest|
||[exdown](https://github.com/nschloe/exdown)|Extract code from markdown files|
||[mktestdocs](https://github.com/koaning/mktestdocs)|Test code present in markdown files|

### Python libraries  

|Category|Tool|Remarks|
|---|---|---|
|Async| [tomorrow](https://github.com/madisonmay/Tomorrow)||
|Audio|[simpleaudio](https://github.com/hamiltron/py-simple-audio)|Play audio using python|
|Automation|[pyuserinput](https://github.com/PyUserInput/PyUserInput), [pyautogui](https://pyautogui.readthedocs.io/en/latest/), [pynput](https://pypi.org/project/pynput/)|Control mouse and keyboard|
|bloom filter| [python-bloomfilter](https://github.com/jaybaird/python-bloomfilter)||
|CLI Formatting| [rich](https://github.com/willmcgugan/rich)||
|Concurrent database| [pickleshare](https://pypi.org/project/pickleshare/)||
|Code to Maths|[latexify-py](https://github.com/odashi/latexify_py), [handcalcs](https://github.com/connorferster/handcalcs)||
|Create interactive prompts| [prompt-toolkit](https://pypi.org/project/prompt-toolkit/)||
|Collections|[bidict](https://pypi.org/project/bidict/)|Bidirectional dictionary|
||[sortedcontainers](http://www.grantjenks.com/docs/sortedcontainers/)|Sorted list, set and dict|
||[munch](https://github.com/Infinidat/munch)|Dictionary with dot access|
|Correlation Metric|[xicor](https://github.com/czbiohub/xicor)||
|Date and Time| [pendulum](https://github.com/sdispater/pendulum)||
|Decorators| [retrying (retry some function)](https://pypi.org/project/retrying/)||
|Debugging| [PySnooper](https://github.com/cool-RR/PySnooper)||
|Improved doctest|[xdoctest](https://github.com/Erotemic/xdoctest)||
|Linting| [pylint](https://pypi.org/project/pylint/), [pycodestyle](https://pypi.org/project/pycodestyle/)|Code Formatting|
||[pydocstyle](https://pypi.org/project/pydocstyle/)|Check docstring|
|| [safety](https://pypi.org/project/safety/), [bandit](https://pypi.org/project/bandit/), [shellcheck](https://www.shellcheck.net/)|Check vulnerabilities|
||[mypy](https://mypy.readthedocs.io/en/stable/)|Check types|
||[black](https://pypi.org/project/black/)|Automated Formatting|
|Leaflet maps from python| [folium](https://python-visualization.github.io/folium/)||
|Multiprocessing|[filelock](https://pypi.org/project/filelock/)|Lock files during access from multiple process|
|Path-like interface to remote files|[pathy](https://github.com/justindujardin/pathy)||
|Pretty print tables in CLI| [tabulate](https://pypi.org/project/tabulate/)||
|Progress bar| [fastprogress](https://github.com/fastai/fastprogress), [tqdm](https://github.com/tqdm/tqdm)||
|Run python libraries in sandbox| [pipx](https://github.com/pipxproject/pipx)||
|Shell commands as functions| [sh](http://amoffat.github.io/sh/)||
|Standard Library Extension|[ubelt](https://github.com/Erotemic/ubelt)||
|Subprocess|[delegator.py](https://github.com/amitt001/delegator.py)||
|Testing| [crosshair(find failure cases for functions)](https://github.com/pschanely/CrossHair)||
|Virtual webcam| [pyfakewebcam](https://github.com/jremmons/pyfakewebcam)||


### Utilities

|Category|Tool|Remarks|
|---|---|---|
|Colab| [colab-cli](https://github.com/Akshay090/colab-cli) | Manager colab notebook from command line|
|Drive|[drive-cli](https://github.com/nurdtechie98/drive-cli)|Use google drive similar to git|
|Database|[mlab](https://mlab.com/)|Free 500 MB MongoDB|
|Data Visualization|[flourish-studio](https://flourish.studio/)||
|Git|[gitjk](https://github.com/mapmeld/gitjk)|Undo what you just did in git|
|Linux|[ripgrep](https://github.com/phiresky/ripgrep-all)||
|Trade-off tools|[egograph](http://egograph.herokuapp.com)|Find alternatives to anything|