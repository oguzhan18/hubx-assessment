import { AnimationTypes } from './AnimationType';
import { MockDataModel } from './models/mock-data-model';

/**
 * Array of feature box data for different animation types.
 */
export const MockDataList: MockDataModel[] = [
  {
    key: AnimationTypes.DOCUMENT_SCANNER,
    title: 'Scan with Ease',
    actionTitle: 'Document Scanner',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT, and Word format.',
    linkUrl: '#',
    desktopImageUrl: '/assets/img/doc-scanner/phone-doc-scanner-lg.png',
    mobileImageUrl: '/assets/img/doc-scanner/phone-doc-scanner.png',
    alt: 'Document Scanner',
  },
  {
    key: AnimationTypes.STAMP,
    title: 'Sign & Stamp',
    actionTitle: 'One Tap Focus',
    description:
      'Draw, scan, or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    linkUrl: '#',
    desktopImageUrl: '/assets/img/stamp-images/phone-stamp-lg.png',
    mobileImageUrl: '/assets/img/stamp-images/phone-stamp.png',
    alt: 'Sign & Stamp',
  },
  {
    key: AnimationTypes.BATCH_SCANNING,
    title: 'Batch Scanning',
    actionTitle: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    linkUrl: '#',
    desktopImageUrl: '/assets/img/batch-scanning/phone-batch-scanning-lg.png',
    mobileImageUrl: '/assets/img/batch-scanning/phone-batch-scanning.png',
    alt: 'Batch Scanning',
  },
  {
    key: AnimationTypes.ADVANCED_FILTERS,
    title: 'Advanced Filters',
    actionTitle: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom-made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    linkUrl: '#',
    desktopImageUrl: '/assets/img/advanced-image/advanced-phone-lg.png',
    mobileImageUrl: '/assets/img/advanced-image/advanced-phone.png',
    alt: 'Advanced Filters',
  },
  {
    key: AnimationTypes.EXPORT_SHARE,
    title: 'Export & Share',
    actionTitle: 'All-Round Conversion',
    description: 'Export your scans as PDF, JPG, ZIP, TXT, and Word.',
    linkUrl: '#',
    desktopImageUrl: '/assets/img/export-share/phone-export-share-lg.png',
    mobileImageUrl: '/assets/img/export-share/phone-export-share.png',
    alt: 'Export & Share',
  },
];
