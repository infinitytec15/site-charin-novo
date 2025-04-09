import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Zap,
  ArrowRight,
  Palette,
  Server,
  BarChart3,
  Headset,
  Building2,
  ShoppingCart,
  Car,
  Globe,
  Shield,
  Smartphone,
  Settings2,
  LineChart,
  Users,
  ChevronDown,
  ChevronUp,
  Trophy,
  Star,
  Award,
  Target,
  Sparkles,
} from "lucide-react";
import MaintenanceModule from "@/components/MaintenanceModule";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProgressBadge } from "@/components/ui/progress-badge";
import { AchievementBadge } from "@/components/ui/achievement-badge";

const WhiteLabelPage = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("demo-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    segment: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>(
    {},
  );
  const [showReward, setShowReward] = useState(false);

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/;

    if (!formData.companyName.trim()) {
      errors.companyName = "Nome da empresa é obrigatório";
    }

    if (!formData.contactName.trim()) {
      errors.contactName = "Nome do responsável é obrigatório";
    }

    if (!formData.email.trim()) {
      errors.email = "E-mail é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Formato de e-mail inválido";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Telefone é obrigatório";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Formato de telefone inválido (00) 00000-0000";
    }

    if (!formData.location.trim()) {
      errors.location = "Localização é obrigatória";
    }

    if (!formData.segment) {
      errors.segment = "Segmento é obrigatório";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description:
          "Por favor, corrija os erros no formulário antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show reward animation
      setShowReward(true);
      setTimeout(() => {
        setShowReward(false);
      }, 5000);

      // Here you would typically send the form data to your backend
      setFormSubmitted(true);
      toast({
        title: "Solicitação enviada!",
        description: "Em breve nossa equipe entrará em contato.",
        variant: "default",
      });

      // Reset form after submission
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          location: "",
          segment: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description:
          "Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Palette className="h-8 w-8 text-[#0C1F38]" />,
      title: "Customização de marca",
      description: "Logo, cores, app e sistema com sua identidade visual.",
      gradient: "from-blue-400 to-blue-600",
      points: 50
    },
    {
      icon: <Server className="h-8 w-8 text-[#0C1F38]" />,
      title: "Infraestrutura de recarga",
      description: "Equipamentos homologados e suporte técnico completo.",
      gradient: "from-purple-400 to-indigo-600",
      points: 75
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#0C1F38]" />,
      title: "Dashboard completo",
      description: "Gestão de recargas, relatórios, usuários e faturamento.",
      gradient: "from-emerald-400 to-[#00A651]",
      points: 100
    },
    {
      icon: <Headset className="h-8 w-8 text-[#0C1F38]" />,
      title: "Atendimento técnico e comercial",
      description: "Atendimento especializado no seu nome ou em parceria.",
      gradient: "from-amber-400 to-amber-600",
      points: 80
    },
  ];

  const targetAudience = [
    {
      icon: <Building2 className="h-8 w-8 text-[#0C1F38]" />,
      title: "Empresas",
      description: "Para oferecer recarga aos colaboradores e clientes.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#0C1F38]" />,
      title: "Shopping centers",
      description: "