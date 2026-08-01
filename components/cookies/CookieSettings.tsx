'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCookieConsent, CookieConsent } from './CookieContext';
import { X, Shield, Lock } from 'lucide-react';

interface CategoryInfo {
    key: 'necessary' | 'analytics' | 'marketing';
    title: string;
    description: string;
    tools: string[];
    locked?: boolean;
}

// ─── Toggle Switch ────────────────────────────────────────────────────────────

interface ToggleProps {
    enabled: boolean;
    locked?: boolean;
    label: string;
    onChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, locked, label, onChange }) => (
    <button
        type="button"
        disabled={locked}
        onClick={() => !locked && onChange(!enabled)}
        aria-label={label}
        style={{
            position: 'relative',
            width: '52px',
            height: '28px',
            borderRadius: '14px',
            border: 'none',
            background: locked
                ? '#9ca3af'
                : enabled
                ? '#d97539'
                : '#d1d5db',
            cursor: locked ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s ease',
            flexShrink: 0,
            outline: 'none',
        }}
    >
        <div
            style={{
                position: 'absolute',
                top: '3px',
                left: enabled ? '27px' : '3px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                transition: 'left 0.3s ease',
            }}
        />
    </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const CookieSettings: React.FC = () => {
    const t = useTranslations('cookies');
    const { consent, showSettings, setShowSettings, saveSettings } = useCookieConsent();
    const [localConsent, setLocalConsent] = useState<CookieConsent>(consent);

    const categories: CategoryInfo[] = [
        {
            key: 'necessary',
            title: t('necessaryTitle'),
            description: t('necessaryDescription'),
            tools: [t('necessaryTool1'), t('necessaryTool2'), t('necessaryTool3')],
            locked: true,
        },
        {
            key: 'analytics',
            title: t('analyticsTitle'),
            description: t('analyticsDescription'),
            tools: ['Google Analytics (GA4)', 'Microsoft Clarity', 'Vercel Analytics'],
        },
        {
            key: 'marketing',
            title: t('marketingTitle'),
            description: t('marketingDescription'),
            tools: ['Google AdWords Conversion Tracking'],
        },
    ];

    // Sync local state wenn das Modal geöffnet wird
    React.useEffect(() => {
        if (showSettings) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLocalConsent(consent);
        }
    }, [showSettings, consent]);

    if (!showSettings) return null;

    const handleToggle = (key: 'analytics' | 'marketing', value: boolean) => {
        setLocalConsent((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        saveSettings(localConsent);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setShowSettings(false)}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1001,
                    backdropFilter: 'blur(2px)',
                }}
            />

            {/* Modal */}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1002,
                    background: '#ffffff',
                    borderRadius: '16px',
                    width: '90vw',
                    maxWidth: '600px',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '24px 28px 16px',
                        borderBottom: '1px solid #e5e7eb',
                        position: 'sticky',
                        top: 0,
                        background: '#ffffff',
                        borderRadius: '16px 16px 0 0',
                        zIndex: 1,
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                background: '#1e3767',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Shield size={20} color="#ffffff" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#1e3767' }}>
                                {t('settings')}
                            </h2>
                            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>
                                {t('settingsSubtitle')}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowSettings(false)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        aria-label={t('close')}
                    >
                        <X size={20} color="#6b7280" />
                    </button>
                </div>

                {/* Categories */}
                <div style={{ padding: '20px 28px' }}>
                    {categories.map((cat, index) => (
                        <div
                            key={cat.key}
                            style={{
                                paddingBottom: index < categories.length - 1 ? '20px' : '0',
                                marginBottom: index < categories.length - 1 ? '20px' : '0',
                                borderBottom: index < categories.length - 1 ? '1px solid #f3f4f6' : 'none',
                            }}
                        >
                            {/* Title Row */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    gap: '16px',
                                    marginBottom: '8px',
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                        <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#1e3767' }}>
                                            {cat.title}
                                        </h3>
                                        {cat.locked && <Lock size={13} color="#9ca3af" />}
                                    </div>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>
                                        {cat.description}
                                    </p>
                                </div>

                                <Toggle
                                    enabled={localConsent[cat.key]}
                                    locked={cat.locked}
                                    label={`${localConsent[cat.key] ? t('disable') : t('enable')}: ${cat.title}`}
                                    onChange={(val) => {
                                        if (!cat.locked) handleToggle(cat.key as 'analytics' | 'marketing', val);
                                    }}
                                />
                            </div>

                            {/* Tools Pills */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                                {cat.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        style={{
                                            fontSize: '11px',
                                            padding: '3px 10px',
                                            borderRadius: '20px',
                                            background: '#f3f4f6',
                                            color: '#4b5563',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div
                    style={{
                        padding: '16px 28px 24px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '12px',
                    }}
                >
                    <button
                        onClick={() => setShowSettings(false)}
                        style={{
                            padding: '10px 22px',
                            borderRadius: '8px',
                            border: '1px solid #d1d5db',
                            background: '#ffffff',
                            color: '#374151',
                            fontSize: '14px',
                            fontWeight: 500,
                            cursor: 'pointer',
                        }}
                    >
                        {t('cancel')}
                    </button>
                    <button
                        onClick={handleSave}
                        style={{
                            padding: '10px 22px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#1e3767',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                    >
                        {t('save')}
                    </button>
                </div>
            </div>
        </>
    );
};

export default CookieSettings;
