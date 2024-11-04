// src/providers/MDXProvider.js

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import AuthorCard from '../components/AuthorCard';
import VideoCard from '../components/VideoCard';
import LastUpdatedByChip from '../components/LastUpdatedByChip';
import LanguageChip from '../components/LanguageChip';
import LevelChip from '../components/LevelChip';
import PlatformChip from '../components/PlatformChip';
import ArticleCard from '../components/ArticleCard';

const components = {
  AuthorCard,
  VideoCard,
  LastUpdatedByChip,
  LanguageChip,
  LevelChip,
  PlatformChip,
  ArticleCard,
};

export default function CustomMDXProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
