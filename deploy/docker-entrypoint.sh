#!/bin/sh
set -e

export NODE_ENV="${NODE_ENV:-production}"
export APP_ENV="${APP_ENV:-production}"
export APP_DEBUG="${APP_DEBUG:-false}"

echo "Running migrations..."
npx pondoknusa migrate

echo "Warming view cache (best effort)..."
npx pondoknusa view:cache || true

echo "Starting Pondoknusa..."
exec npx pondoknusa start
