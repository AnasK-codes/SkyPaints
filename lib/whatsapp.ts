const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "15551234567";

export interface WhatsAppMessageOptions {
  name?: string;
  service?: string;
  message?: string;
}

export function buildWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const { name, service, message } = options;

  let text = "Hi SkyPaints! ";

  if (name) text += `My name is ${name}. `;
  if (service) text += `I'm interested in your ${service} service. `;
  if (message) text += message;
  if (!name && !service && !message) text += "I'd like to request a free quote.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text.trim())}`;
}

export function openWhatsApp(options: WhatsAppMessageOptions = {}): void {
  const url = buildWhatsAppUrl(options);
  window.open(url, "_blank", "noopener,noreferrer");
}
