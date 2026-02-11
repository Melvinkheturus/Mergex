import React from 'react';
import { ClientInfo } from '../../types';

interface ClientSnapshotProps {
    client: ClientInfo;
}

export function ClientSnapshot({ client }: ClientSnapshotProps) {
    return (
        <section className="py-12 border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Industry</h3>
                        <p className="text-gray-900 font-medium">{client.industry}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Location</h3>
                        <p className="text-gray-900 font-medium">{client.location}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Company Size</h3>
                        <p className="text-gray-900 font-medium">{client.companySize}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Service</h3>
                        <p className="text-gray-900 font-medium">{client.service}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
