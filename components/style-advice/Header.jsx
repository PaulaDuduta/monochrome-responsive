import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function ProductPageHeader() {
  return (
    <header className="header">
      <HeaderSecondary></HeaderSecondary>

      <HeaderPrimary></HeaderPrimary>
    </header>
  );
}
