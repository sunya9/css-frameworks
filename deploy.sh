#!/sh/bash

if [ $TRAVIS_EVENT_TYPE = "cron" ]; then
  curl -X POST -d '{}' $DEPLOY_HOOK_URL
fi
