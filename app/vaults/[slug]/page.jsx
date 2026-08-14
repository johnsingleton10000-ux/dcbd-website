import { notFound } from 'next/navigation';
import { VAULTS, getVault } from '../../../lib/vaults';
import { productsInVault } from '../../../lib/catalog';
import VaultShell from '../../../components/VaultShell';

export function generateStaticParams() {
  return VAULTS.map((vault) => ({ slug: vault.slug }));
}

export function generateMetadata({ params }) {
  const vault = getVault(params.slug);
  return { title: vault ? `${vault.name} | DCB Revolution` : 'Vault' };
}

export default function VaultPage({ params }) {
  const vault = getVault(params.slug);
  if (!vault) notFound();
  return <VaultShell vault={vault} products={productsInVault(vault.slug)} />;
}
