import type { Presence } from "@/config/types";
import { api, presencesEndpoint } from "@/services/api";
import { formatDateToDDMMYYYY } from "@/utilities/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const StudentDetailPage = () => {
    // * vars
    const [presences, setPresences] = useState<{ data: Presence[] } | null>(
        null
    );
    const { id } = useParams();
    const params = { student_id: id };

    // * side effects
    useEffect(() => {
        const fetchPresences = async () => {
            try {
                const res = await api.get(`${presencesEndpoint}`, { params });
                console.log(res.data);
                setPresences(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPresences();
    }, []);

    // * views
    return (
        <div className="bg-zinc-900 overflow-auto h-full p-8">
            {presences?.data.map((presence) => (
                <div key={presence.id} className="border p-4">
                    <p>
                        {presence.student_first_name}{" "}
                        {presence.student_last_name}
                    </p>
                    <p>
                        Presence status: {String(Boolean(presence.is_present))}
                    </p>
                    <p>{formatDateToDDMMYYYY(presence.date)}</p>
                </div>
            ))}
        </div>
    );
};
